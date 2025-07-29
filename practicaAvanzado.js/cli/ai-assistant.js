// 1.-Este script es un CLI interactivo que:
// 2.-Pide una API key y nombre del usuario.
// 3.-Inicia una conversación con Gemini.
// 4.-Guarda el historial de mensajes.
// 5.-Muestra respuestas con estilo.
// 6.-Sigue funcionando en bucle hasta que el usuario lo detenga.#!/usr/bin/env node

const {blue, green, red, yellow} = require('colorette') // importa modulos para dar colores al texto en la terminal por ejem: blue() y green()
const minimist = require ('minimist') // Libreri que permite parsear argumentos que se pasan desde la terminal como donde archivo.js --name=Santiago
const {prompt} = require ('inquirer').default // Importa el el metodo prompt desde la libreria inquirer, que permite mostrar inputs interactivos en la terminal
const ora = require ('ora').default // Importa una libreria para mostrar spinner interactivos (como un simholo de cargando entre cada tarea)
const {GoogleGenerativeAI} = require ('@google/generative-ai') // importa la clase principal para acceder al modelo de gemini


// process.argv.slice(2) obtiene los argumentos pasados en la terminal (obtiene los que estan en la posicion 2 del arreglo, porque los primeros tiene relacion con las rutas de los directorios)
// minimist los convierte en un objeto con claves
// --name=Santiago se convierte en {name: 'Santiago'}
// si no se pasa ..name, por defecto usara usuario
const args = minimist (process.argv.slice(2), {
    string: ['name'],
    default: {name: 'Usuario'},
})

// VERIFICACION DE LA API KEY
// Verifica que exista la variable de entorno GEMINI_API_KEY
// Si no existe, muestra un mensaje de error en rojo y termina el porograma en error (exit 1)
if (!process.env.GEMINI_API_KEY){
    console.error(red('Por favor proporciona la API key de Gemini.\Ejemplo: GEMINI_API_KEY=tu_clave node archivo.js'))
    process.exit(1)
}

// MENSAJE DE BIENVENIDA EN COLORES
// Muestra un saludo personalizado en colores usando los argumentos recibidos (--mame)
console.log(`${blue('Hola')} ${green(args.name)} ${yellow('Bienvenido al CLI de Practica Avanzado')}`)

// Definir modelo y system prompt (Son las instrucciones d eun asistente de AI)
//INICIALIZACION DEL MODELO DE GEMINI
//  Instruccion inicial que sirve como contexto para el modelo (Como decirle "Actua como un profesor", etc)
const systemPrompt = 'Hola Mundo!! Probando el system prompt'
// Crea una instancia de la clase usando la API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
// Configura el modelo que se va a usar (gemini-1.5-flash) con instrucciones del system prompt
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash', systemInstruction: systemPrompt})

// HISTORIAL DE INTERECCIONES (CONVERSACIONES)
const conversaciones = []

// FUNCION PARA GENERAR RESPUESTA DEL MODELO
// Transforma el historia en el el formato que Gemini espera ( role: user/model, y el texto dividido por partes)
async function generateResponse (prompt){
    try{
        const history = conversaciones.map(item => ({
            role: item.role,
            parts: [{text: item.content}]
        }))

        // Inicia un nuevo chat con ese historial
        // temperature: Controla la creatividad
        // maxOutputTokens: cuantas palabras puede generar como maximo
        const chat = model.startChat({
            history,
            generationConfig:{
                temperature:0.7,
                maxOutputTokens: 1000
            }
        })

        // Envia un nuevo prompt al modelo
        // Obtiene la respuesta en texto
        // La guarda como parte del historial (rol model)
        const result = await chat.sendMessage(prompt)
        const response = await result.response.text()
        conversaciones.push({role: 'model', content: response})
        return response
        // En caso de un error, lo muestra y devuelve un mensaje alternativo
    }   catch (error) {
        console.error('Error Al generar respuesta: ', error)
        return 'Lo siento, hubo un error al generar la respuesta'
    }
}

// FUNCION PORINCIPAL DE CLI (RECURSIVA)
// Muestra un input ne consola con el nombre del usuario
// Espera que escriba algo (userInput)
async function main() {
    try {
        const {userInput} = await prompt([
            {
                type: 'input',
                name: 'userInput',
                message: yellow(`${args.name}: `),
                prefix: ''
            }
        ])
        // Guarda lo que el usuario escribio en el historial
        conversaciones.push({role: 'user', content: userInput})
        // Muestra un spinner en el historial con el mensajae procesando
        const spinner = ora ({
            text: 'Procesando...',
            color: 'cyan'
        }).start()
        // Llama a generativeResponse(), detiene el spinner, y muestra la respuesta con el color
        const response = await generateResponse(userInput)
        spinner.stop()
        console.log(`${yellow('Profesor: ')} ${green(response)}`)

        // Llama a la misma para que el proceso sea ciclico y permita seguir la conversacion 
        main ()
        // Captura errores generales y si es una salida voluntaria (ExitPromptError), termina el programa
    }   catch (error){
        if(error.name == 'ExitPromptError'){
            console.log('\nAdios, haasta luego!')
            process.exit(0)
        }
        console.error('Error al generar la respuesta', error)
        process.exit(1)
    }
}
// Inicia la conversacion llamda main
main ()
// MANEJO DE SEÑALES Y ERRORES GLOBALES
// Captura al usuario presionando Ctrl + C y cierra el programa con un mensaje amigable
process.on ('SIGINT', () => {
    console.log('\nAdios, hasta luego!')
    process.exit (0)
})
// Captura errores que no hayan sido manejados (fallos no previstos) y termina el programa con el codigo error
process.on('uncaughtException', (error)=> {
    console.error('Error no capturado: ', error)
    process.exit(1)
})



// ---------------> Anexos <-----------------

// se requiere utilizar la libreria minimist. La cual es una libreri ade nodejs, que sirve para analizar argumentos de la linea de comandos.
// Comando para añadir minimist. pnpm add minimist
// con el comando "pnpm intit" siendo ejecutado desde la cosnola, se puede crear un archivo package.json
// #!/usr/bin/env node-- Se debe de usar al inicio del archivo para que el sistema operativo sepa que debe usar Node.js para ejecutar este script.
// chmod +x hello-cli.js Esto hace que el archivo sea ejecutable en sistemas Unix/Linux
// 1. Para ejecutar el script, usa el comando: ./nombreDelArchivo.js
// se ejecuta linea de comandos de manera de ejemplo : ./nice-cli.js --nombre=santiago --rol=developer --c=colimasoft --s
// pnpm add colorette ------> Esta funcion sirve para añadir colores al texto de la terminal y que visualmente se vea mejor.

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// pnpm add inquirer ora --------------> Inquirer y Ora son dos paquetes npm populares utilizados en aplicaciones Node.js para mejorar la
// interfaz de línea de comandos (CLI). Inquirer se utiliza para crear preguntas interactivas y recopilar la entrada del usuario, mientras
//  que Ora se utiliza para mostrar indicadores de carga visualmente atractivos durante las operaciones de larga duración. 
// ----------------------------------------------------------------------------------------------------------------------------------------------------

// pnpm add @google/generative-ai ---------> es un paquete de Node.js que proporciona acceso a la API de Google Generative AI
// Este es el comando que se necisa para poder correr el programa desde la terminal:
// GEMINI_API_KEY=AIzaSyBJKgqUYXeGQLXE8zNpDQoo-C-Lq9JN58s node ai-assistant.js 