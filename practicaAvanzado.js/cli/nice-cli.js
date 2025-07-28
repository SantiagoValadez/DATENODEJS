#!/usr/bin/env node
// shebang necesario para un cli. Le dice al sistema operativo que el script debe de ejecutarse utilizando node.js. Lo que permite que el aarchivo se ejecute
// directamente dese la terminal como un comando.

const minimist = require ('minimist') // se importa el modulo minimist que sirve para parsear (interpretar) los argumentos que se pasan desde la linea de comandos 




// Aqui se procesan los argumentos con minimist
// process.args.slice(2) elimina los dos primeros elementos (node y path del script).
// OPERACION DE CONFIGURACION
// string: espera que estos agumentos (nombre,rol y compania) sean textos.
// boolean: el argumento "saludo" sera interpretado como true o false
// default: sino se pasa --saludo, por defecto sera false
// aslias: permite usar versiones cortas de los argumentos:
// - '-s' es equivalente a '--saludo'
// - '-n'= --nombre
// - '-r'= --rol
// - '-c'= --compania
// La libreria de minimist, nos permite tener un plantilla de todo lo que sera la entrada de los comandos
const args = minimist(process.argv.slice(2),{
    string: ['nombre', 'rol', 'compania'], // Nota: En los cli's, el uso de la Ñ o caracteres considerados especiales, si es de importancia, por esa razon hay que evitar usarlos
    boolean : ['saludo'],
    default: {saludo: false}, // Si no se pasa el argumento saludo, por defecto sera false
    alias: {s: 'saludo', n: 'nombre', r: 'rol', c: 'compania'}, // Se definen alias para los argumentos
})


// Muestra en consola el objeto args, que contiene los argumentos procesados
console.log(args)

// Son señales que el sistema puede enviar ene el proceso. Por ejemplo:
// SIGINT: se envia cuando presionas Crtl + C en la terminal
// SIGTERM: Se envia al intentar terminaer el proceso
// SIGUSRA Y SUGUSR2 son señales personalizadas que puedes emitir desde otro script o procesos
const signals = ['SIGINT', 'SIGTERM', 'SIGUSR1', 'SIGUSR2']


// Se añade un listener para cada señal. Si el proceso recibe alguna de ellas.
// Se imprime que fue recibida
// Se finaliza el proceso de forma limpia con process.exit(0)
signals.forEach(signal => {
    process.on (signal, () => {
        console.log(`Recibido ${signal}`)
        process.exit(0)
    })
})
// ---------------> Anexos <-----------------

// se requiere utilizar la libreria minimist. La cual es una libreri ade nodejs, que sirve para analizar argumentos de la linea de comandos.
// Comando para añadir minimist. pnpm add minimist
// con el comando "pnpm intit" siendo ejecutado desde la cosnola, se puede crear un archivo package.json
// #!/usr/bin/env node-- Se debe de usar al inicio del archivo para que el sistema operativo sepa que debe usar Node.js para ejecutar este script.
// chmod +x hello-cli.js Esto hace que el archivo sea ejecutable en sistemas Unix/Linux
// 1. Para ejecutar el script, usa el comando: ./nombreDelArchivo.js
// se ejecuta linea de comandos de manera de ejemplo : ./nice-cli.js --nombre=santiago --rol=developer --c=colimasoft --s