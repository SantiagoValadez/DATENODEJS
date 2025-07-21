const Logger = require('./CombinacionSingleton');
const LoggerFactory = require ('./CombinacionFactory');

// const loggerInstance = new logger ();
const loggerConsole = LoggerFactory.createLogger('console');
const loggerFile = LoggerFactory.createLogger('file');

// Uso de logger
loggerConsole.log('Este es un mensaje de log en consola');
loggerFile.log('Este es un mensaje de log en archivo');

//
const loggerInstance = new Logger();
loggerInstance.getLogs().forEach(log => console.log(log));
    
