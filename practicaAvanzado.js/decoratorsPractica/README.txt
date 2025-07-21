Resumen

Dominar los conceptos de decorators e inyección de dependencias en Node.js ofrece flexibilidad y potencia al desarrollo. Estos patrones facilitan extender
funcionalidades de manera estructurada, dinámica y fácil de mantener. Exploraremos cómo aplicarlos utilizando clases en JavaScript,
ejemplificando claramente su uso práctico.

¿Qué son los decorators en Node.js y para qué se usan?
Un decorator es un patrón ampliamente utilizado en el ecosistema Node.js, especialmente con el framework Fastify. Son herramientas que permiten añadir
dinámicamente funcionalidades a objetos o métodos sin modificar directamente su estructura original.

Son ideales para agregar comportamiento a objetos como solicitudes (requests) o respuestas (responses) en diferentes etapas del ciclo de vida de una petición.
Facilitan mantener tus bases de código más limpias y simples de extender.
Ejemplo práctico del patrón decorator
Veamos cómo implementar un decorator con clases para agregar funcionalidades a un método existente sin modificar su implementación original:

Definimos la clase original que realiza el procesamiento de datos:
class DataService {
  processData(data) {
    return data.map(item => item * 2);
  }
}
Creamos una clase adicional que amplía su funcionalidad agregándole registros de actividad (logs):
class DataServiceWithLogging {
  constructor(dataService, logger) {
    this.dataService = dataService;
    this.logger = logger;
  }

  processData(data) {
    this.logger.log('Iniciando procesamiento');
    const resultado = this.dataService.processData(data);
    this.logger.log('Finalizando procesamiento');
    return resultado;
  }
}
¿Qué es la inyección de dependencias y cómo funciona en Node.js?
La inyección de dependencias es un patrón utilizado para suministrar a una clase las dependencias que necesita, en lugar de crear esas dependencias internamente.

Potencia la modularidad y flexibilidad en las aplicaciones.
Facilita el mantenimiento y el reemplazo o actualización de componentes independientes.
Creando un logger que usa inyección de dependencias
Podemos implementar diferentes loggers, como un logger de consola sencillo:

class Logger {
  log(message) {
    console.log(`Logger: ${message}`);
  }
}
¿Cómo combinar decorators e inyección de dependencias?
Combinar ambos patrones permite funcionalidad extendida y modularidad:

Creamos e instanciamos las clases originales y el logger.
Aplicamos la técnica del decorador inyectándole el logger.
const baseService = new DataService();
const logger = new Logger();
const decoratedService = new DataServiceWithLogging(baseService, logger);
Usando nuestro servicio decorado
Finalmente, ejecutamos el servicio decorado:

const inputData = [1, 2, 3, 4];
const processedResult = decoratedService.processData(inputData);
console.log('Resultado procesado:', processedResult);
Esto imprimirá los logs del proceso y mostrará el resultado del procesamiento de datos: - Logger: Iniciando procesamiento - Logger: 
Finalizando procesamiento - Resultado procesado: [2, 4, 6, 8]

