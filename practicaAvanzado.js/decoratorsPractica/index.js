class DataService {
    processData (data){
        return data.map(item => item*2);
    }
}

// Decorar DataService 
class DataServiceWithLogging{
    constructor (dataService, logger){
        this.dataService = dataService;
        this.logger = logger;
    }
    processData(data){
        this.logger.log('Iniciando Procesamiento de datos')
        const resultado = this.dataService.processData(data);
        this.logger.log('Finalizando procesamiento')
        return resultado
    }
}

class Logger{
    log (message){
        console.log('[Logger]', message)
    }
}

const baseService = new DataService ();
const logger = new Logger ();
const decoratedService = new DataServiceWithLogging(baseService, logger);

// uso del servicio decorado 
const inputData = [1,2,3,4]
const processedData = decoratedService.processData(inputData)
console.log (`Resultadon procesado ${processedData}`)