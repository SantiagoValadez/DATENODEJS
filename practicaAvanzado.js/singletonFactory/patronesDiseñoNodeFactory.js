// -----------> PATRON DE DISEÑO FACTORY <-------------

// El patrón de diseño Factory, o Fábrica, es un patrón creacional que proporciona una interfaz para crear objetos, permitiendo a las subclases decidir qué 
// clase concreta instanciar. En lugar de utilizar constructores directamente, se delega la creación de objetos a una fábrica, lo que facilita la extensibilidad
// y la flexibilidad del código. 



// -------------------> 
// ¿Qué es el patrón Factory y por qué usarlo?
// A diferencia del Singleton, el patrón Factory permite instanciar múltiples objetos, diseñados a partir de una clase específica. Es ampliamente usado
// en frameworks y herramientas para simplificar el proceso de creación de objetos robustos sin exponer la lógica compleja detrás.

// ¿Cómo aplicar el patrón Factory en JavaScript?
// Una implementación sencilla implica:

// Tener una clase base (por ejemplo, Pet).
// adicionar una clase separada (Factory) que maneje la instanciación de múltiples objetos.

 class Pet { // se le aseigna un nombre a la clase. Este caso el nombre Pet
    constructor (name){ // Recibe unn parametro name y lo asigna como propiedad del objeto
        this.name = name; // toma el valor del parametro y lo guarda como propiedad del obajeto con el nombre "name"
    }
 }

 // clase que actua como una fabrica de mascotas 
 class PetFactory { // nombre de la clase
    createPet(name){ // Metodo que crea una nueva instancia de la clase "Pet" (<-Metodo que devuelve un objeto)
        return new Pet (name); // Retorno de la clase Pet
    }
 }

 const factory = new PetFactory (); // Crea una instancia del objeto que tiene el metodo "createPet" (<- aqui se crea un objeto)
 const pet1 = factory.createPet('fido'); // pet1 es una instancia de la clase "Pet". factory es un objeto de la clase "createFactory"
 // createPet('Fido') es un metodo de esa clase que hace lo siguiente " return new Pet('Fido');"
 const pet2 = factory.createPet('laika'); // hace los mismo ya previamente explicado en el console.log anterior

 console.log (pet1 === pet2); // comparacion entre las instancias pet1 y pet2
 console.log(factory); // imprime en pantalla de que clase se esta creando el objeto.
 console.log (pet1); // va imprimir el nombre de la mascota, de acuerdo a lo especificado en la clase PetFactory
 console.log (pet2); // va imprimir el nombre de la mascota, de acuerdo a lo especificado en la clase PetFactory
 

 