class DataService {
    processData (data){
        return data.map(item => item*2); //la clase tiene un arreglo llamado processData que recibe como parametro data, donde cada numero es multiplicado por 2
    }
}

// Decorar DataService. Implementación del patro decorador. Envuelve un servicio existente, para agregarle funcionalidad
class DataServiceWithLogging{
    constructor (dataService, logger){
        this.dataService = dataService;
        this.logger = logger;
    }
    processData(data){
        this.logger.log('Iniciando Procesamiento de datos') // imprime un mensaje antes de procesar
        const resultado = this.dataService.processData(data); // llama a processData del servicio original
        this.logger.log('Finalizando procesamiento') // imprime un mensaje terminar
        return resultado // devuelve el resultado
    }
}

class Logger{
    log (message){
        console.log('[Logger]', message) // clase que imprimer mensajes por consola con la etiqueta logger
    }
}

const baseService = new DataService ();
const logger = new Logger ();
const decoratedService = new DataServiceWithLogging(baseService, logger);

// uso del servicio decorado 
const inputData = [1,2,3,4]
const processedData = decoratedService.processData(inputData)
console.log (`Resultadon procesado ${processedData}`)