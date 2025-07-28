#!/usr/bin/env node

const {blue, green, red, yellow} = require('colorette')
const minimist = require ('minimist')
const {prompt} = require ('inquirer').default
const ora = require ('ora').default
const {GoogleGenerativeAI} = require ('@google/generative-ai')

const args = minimist (process.argv.slice(2), {
    string: ['name'],
    default: {name: 'Usuario'},
})

if (!process.env.GEMINI_API_KEY){
    console.error(red('Por favor proporciona la API key de Gemini'))
    process.exit(1)
}

console.log(`${blue('Hola')} ${green(args.name)} ${yellow('Bienvenido al CLI de Practica Avanzado')}`)

// Definir modelo y system prompt (Son las instrucciones d eun asistente de AI)
const systemPrompt = 'Hola Mundo!! Probando el system prompt'
const genAI = new GoogleGenerativveAi(process.env.GEMINI_API_KEY)
const model = genAI.geyGenerativeModel({model: 'gemini-1.5-flash', systemInstruction: systemPrompt})

// Historial de interacciones
const conversaciones = []

// Funcion para generar respuesta
async function generateResponse (prompt){
    try{
        const history = conversaciones.map((item)=>{
            return {role: item.role, parts: [{text: item.content}] }
        })
        const chat = model.startChat({
            history,
            generationConfig:{
                temperature:0.7,
                maxOutputTokens: 1000
            }
        })

        const result = await chat.sendMessage(prompt)
        const response = result.response.text()
        conversation.push({role: 'model', content: response})

        return result.response
    }   catch (error) {
        console.error('Error Al generar respuesta: ', error)
        return 'Lo siento, hubo un error al generar la respuesta'
    }
}

// Funcion Principal

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

        conversation.push({role: 'user', content: userInput})
        const spinner = ora ({
            text: 'Procesando...',
            color: 'cyan'
        }).start()

        const response = await generateResponse(userInput)
        spinner.stop()
        console.log(`${yellow('Profesor: ')} ${green(response)}`)

        main ()
    }   catch (error){
        if(error.name == 'ExitPromptError'){
            console.log('\nAdios, haasta luego!')
            process.exit(0)
        }
        console.error('Error al generar la respuesta', error)
        process.exit(1)
    }
}

main ()

process.on ('SIGINT', () => {
    console.log('\nAdios, hasta luego!')
    process.exit (0)
})

process.on('uncaughException', (error)=> {
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