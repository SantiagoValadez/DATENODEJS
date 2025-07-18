// combinacion de patrones de diseño. Singleton y Factory para crear un logger.

const Logger = require ('./logger') // Se importa docuemnto de "Logger" En este nuevo documento, para poder tener acceso a el

const loggerInstance = new Logger (); // se hace instancia de la clase "Logger"

class ConsoleLogger {
    constructor(){
        this.logger = loggerInstance;
    }

    log(message){
        console.log('Usando ConsoleLogger');
        console.log(`ConsoleLogger: ${message}`);
        this.logger.log(message);
    }
}

class FileLogger {
    constructor (){
        this.logger = loggerInstance;
    }

    log(message){
        console.log('Usando FileLogger');
        console.log(`FileLogger ${message}`);
        this.logger.log(message);
    }
}

class LoggerFactory {
    static createLogger(type){
        if (type === 'console'){
            return new ConsoleLogger ();
        } else if (type === 'file'){
            return new FileLogger();
        } else {
            throw new Error('Tipo de Logger no valido');
        }
    }
}

module.exports = LoggerFactory; 