// combinacion de patrones de diseño. Singleton y Factory para crear un logger.

class Logger {
    // Esta parte se crea automaticamente cuando se crea una nueva instancia "new Logger"
    constructor (){ 
        if(!Logger.instance){ // verifica si ya eciste una instancia de la clase llamada "Logger". En caso de que no sea asi, le asigna el valor a "this"
            Logger.instance = this; // guarda la instancia actual en una propiedad estatica llamda "instance" en la clase "Logger"
        }
        this.logs = []; // se hace una instancia de objetos. Se crea una propiedad llamda "logs" de tipo arreglo, donde se guardaran los msj. de log
        return Logger.instance; //Devuelve la misma instancia, sin importar cuantas veces llames a "new Logger"
    }
    // Metodo Logs
    log (message) {
        const timesStamp = new Date().toISOString(); // Crea marca de tipo Iso
        this.logs.push(`${timesStamp}:${message}`); // Agrega el mensaje con la hora al array "logs" 
        console.log (`${timesStamp}:${message}`); // imprime el mensaje por consola
    }

// Metodo getLogs
    getLogs(){
        return this.logs; // Devuelve los mensajes almacenadois en el array "logs"
    }
}

module.exports = Logger; // Se exporta la clase, lo que permite usar la clase "Logger" en otros archivos usando: rquire('./Logger')