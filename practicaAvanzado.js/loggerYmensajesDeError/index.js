// -----------------> USO DE LA ERRAMIENTA PINO PARA MANEJAR LOS LOGGER Y EFICIENTIZAR LOS PROCESOS EN EL CODIGO <-----------------

const pino = require ('pino') // importa la libreri a de pino que permite registrar los logs (mensajes con diferentes niveles:info,debug y error)
const fs = require ('fs') // Importa el modulo de node para trabajar con archivos del sistema (pero no se esta usando directamente en este ejercicio, por lo que se podria quitar si se quisiera)


// revisa el valor de la variable de entorno NODE_ENV
// Si es 'prdcution' la constante isProduction sera true
// Esto sirve para saber si estas en modo produccion o en modo desarrollo, y asi cambiar el comportamiento de logger 
const isProduction = process.env.NODE_ENV === 'production'

// configuracion de desarrollo
const developmentConfig = {
    level : 'debug', //-> muestra los niveles de logs (debug, info, warn y error)
    transport : {   //-> inidica como se deben de transformar y mostrar los logs
        target: 'pino-pretty', //-> usa el paquete "pino-pretty" para mostrar logs de forma legible y con color en la terminal
        options: {
            colorize: true, // -> Activa los colores
            ignore: 'pid,hostname', //-> oculta el ID del proceso y nombre del host
            translateTime: 'SYS:dd-MM-yyyy HH:mm:ss', //-> muestra la hora en ese formato
            levelFirst: true //-> muestra el nivel (info, error, etc) al principio de cada linea.
        },
    },
}

const productionConfig = {
    level: 'info',
    transport: {
        target: 'pino/file',
        options: {
            destination: 'app.log',
            translateTime: 'SYS:dd-MM-yyyy HH:mm:ss Z',
            levelFirst: true
        }
    }
}

// Si isProduction = true, usa la configuracion de produccion, si no es asi, usa la configuracion de desarrollo
const config = isProduction ? productionConfig : developmentConfig
const logger = pino(config) // Crea un logger personalizado con la configuracion elegida. Y este logger es lo que se usa despues como:
// logger.info()
// logger.debug()
// logger.error()


// -----------------> AQUI EMPIEZA EL EJEMPLO DE LOGGER QUE SIRVE PARA DARNOS MENSAJES DE ERROR <-----------------

function operacion (){ // define una operacion que se rrepite a cada segundo usando setInterval
    // throw new Error('Error capturado') * esta linea provocaria un error no capturado, lo que es util par aprobar los manejadores de errores.
    setInterval (()=>{
        // console.log('Realizando operacion') // Si no lanzas un error, esta funcion se ejecutara cada segundo. Lo que imprime en consola "Realizando operacion". console.log, fue remplazado por logger. 
        logger.debug('Realizando operacion');
    }, 1000); // tiempo expresado en milisegundos
    
}

// maneja cualquier error no manejado ( por ejemplo "throw new error(...)) sin try/catch
// imprime el error y finaliza con el proceso de saluda 1 (indica error)
process.on('uncaughtException', (err)=> {
    // console.error('Error no capturado: ', err) // console.error, fue remplazado por logger
    logger.error('Error no capturado: ', err)
    process.exit(1)
})

// Captura promesas rechazadas que no tienen un catch()
// Tambien finaliza el proceso con un error (exit(1))
process.on('unhandledRejection', (reason)=> {
    // console.error('Rechazo no capturado', reason) // console.error, fue remplzado por logger
    logger.error('Rechazo no capturado', reason)
    process.exit(1)
})
 // MANEJO DE SEÑALES DEL SISTEMA
 // Lista de señales del sistema que el proceso puede recibir
const signals = ['SIGINT', 'SIGTERM', 'SIGUSR1', 'SIGUSR2']

// Por cada señal listada:
// - Se registra un listener con "process.on(...)"
// - Cuando el proceso recibe esta señal (ej. Ctrl+C = SIGTH), imprime un mensaje y finaliza el programa con exit (0) (salida existosa)
signals.forEach((signal)=>{
    process.on(signal, ()=>{
        // logger.info(`Recibido ${signal}`) // console.info, fue remplazado por un logger
        logger.info(`Recibido ${signal}`)
        process.exit(0)

    })
})

// inicia la ejecucion del programa.
// Casa segundo se imprime "Realizando operacion". Lo que refleja el cosnole.log. alamacenado en la primera funcion "operacion".
operacion ()