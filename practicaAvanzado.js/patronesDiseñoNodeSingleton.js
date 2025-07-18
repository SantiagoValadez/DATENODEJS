// -----------> PATRON DE DISEÑO SINGLETON <-------------

// En programación, un singleton es un patrón de diseño que asegura que una clase tenga una única instancia y proporciona un punto de acceso global a esta instancia. 
// Es útil cuando se necesita garantizar que solo exista un objeto de cierto tipo en todo el sistema, como un administrador de recursos o un administrador de 
// configuración

// proporciona un punto de acceso global a ella.

class Singleton { // Nombre de la clase. Es este caso Singleton
    constructor (){ // funcion especial que se ejecuta cuando se crea una nueva instancia con new Singleton()
     if (!Singleton.instance){
        Singleton.instance = this;
    }
    // Singleton.instance, es una propiedad estatica, la cual es aquella que pertenece a la clase en sí misma, en lugar de a instancias individuales de esa clase.
    //  Esto significa que solo existe una copia de la propiedad estática, y puede ser accedida a través del nombre de la clase, sin necesidad de crear un objeto. 
    return Singleton.instance; // Devuelve la uinica instancia  existente, asegurando que siempre se retorne la misma.
}
setName (name){ // es un metodo de la clase que asigna un nombre a la instancia
    this.name = name // guarda el parametro name como propiedad del objeto
    }
}

const singleton1 = new Singleton (); // Instancia de la clase Singleton
console.log (singleton1);
console.log (Singleton);