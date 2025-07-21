// -----------> PATRON DE DISEÑO SINGLETON <-------------

// En programación, un singleton es un patrón de diseño que asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esta instancia. 
// Es útil cuando se necesita garantizar que solo exista un objeto de cierto tipo en todo el sistema, como un administrador de recursos o un administrador de 
// configuración

// ¿Qué es el patrón Singleton en JavaScript?
// El patrón Singleton permite garantizar que una clase tenga una única instancia en toda la aplicación. Cuando se intenta crear múltiples objetos, 
// Singleton entrega siempre la misma instancia del objeto, asegurando eficiencia y consistencia en la gestión de recursos.

// ¿Cómo implementar un Singleton?
// Implementarlo es sencillo con unos pasos clave:

// Primero, define una clase Singleton, verificando si existe ya una instancia.
// Retorna la instancia existente si ya fue creada.
// Crea una nueva instancia únicamente si no existe.
// proporciona un punto de acceso global a ella.

// -----------> PATRON DE DISEÑO FACTORY <-------------

El patrón de diseño Factory, o Fábrica, es un patrón creacional que proporciona una interfaz para crear objetos, permitiendo a las subclases decidir qué clase
concreta instanciar. En lugar de utilizar constructores directamente, se delega la creación de objetos a una fábrica, lo que facilita la extensibilidad y 
la flexibilidad del código. 

