// Estructura de datos

// KEY / VALUE

// objeto {
//     propiedad: valor,
//     propiedad: valor,
//     propiedad: valor,
//.    metodos ()
// }

const persona = {
    nombre: 'Daniela',
    edad: 27,
    dirección: {
        calle: 'Desconocido',
        ciudad: 'Colima',
    },
    saludar (){ // A esta acción que realiza un objeto, se le conoce como el metodo
        console.log(`HOLA, MI NOMBRE ES: ${persona.nombre}`)
    }
}


//agregar propiedades a un objeto
persona.telefono01 = "555-555-555";
persona.telefono02 = "554-554-554";

//agregar un nuevo metodo a un objeto
persona.despedir = () => {
    console.log('ADIOS');
}
persona.triste = () => {
    console.log('LLORAR');
}

//Eliminar propiedades de un objeto
delete persona.telefono02;

//Eliminar un metodo
delete persona.triste;

console.log(persona);
persona.saludar();
persona.despedir();


// Crear objetos utilizando metodos en la programación orientada a objetos de Js

//FORMA SIN USAR UNA FUNCIÓN
// const persona = {
//     nombre: 'Diego',
//     Apellido: 'De granda'
// }

//FORMA USANDO UNA FUNCIÓN (constructor)
function Personas (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

// instancias del objeto persona
const persona1 = new Personas ('Juan', 'Oswaldo', 30);
console.log(persona1);

const persona2 = new Personas ('Daniela', 'Rodriguez', 27);
console.log(persona2);

// ------------> Agregar alguna propiedad o algun metodo al contructor mediante la función prototype <--------------
Personas.prototype.telefono = '555-555-555'// Se esta agregando una nueva propiedad "Telefono" al constructor "Personas"

// Añadir metodo
Personas.prototype.saludar = function () {
    console.log (`Hola. Me llamo ${this.nombre} ${this.apellido}`)
}


// ------------> Agregar nuevas propiedades solamete a una instancia de un objeto <---------
persona1.nacionalidad = "Mexicano"
console.log(persona1)

persona1.saludar();
persona2.saludar();



// --------------> CLASES EN JAVASCRIPT. <-------------

class Sujeto {
    constructor ( nombre, edad ){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar (){
        console.log(`Hola, mi nombre es: ${this.nombre} y tengo ${this.edad} años.`)
    }
}

const persona01 = new Sujeto ("Daniela", 21);
persona01.saludar();

// Otro ejemplo de clases en Js, usando un ejempplo de animasles
class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log('El animal emite un sonido')
    }
}

class Perro extends Animal { // Esta es la estructura para utilizar la herencia e indicar que se estan tomando atributos y metodos de la casa "Animal"
    constructor (nombre, tipo, raza){
        super(nombre, tipo); // se utiliza el super para poder extender la propiedades que vienen de otra clase constructora
        this.raza = raza; // aqui solo se usa el "This", ya que es lo unico nuevo que no se esta heredando de la clase "Animal"
    }
    emitirSonido(){
        console.log('El perro ladra');
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}

// ----------------> Metodos y herencia prototipica en Js <-----------------

const perro1 = new Perro ('Bobby', 'Perro', 'Pug' );
console.log(perro1);

// Añadir un metodo a la instancia de perro1
perro1.nuevoMetodo = function () {
    console.log('Este es un metodo');
}

// Añadir un metodo a la clase Perro
Perro.prototype.segundoMetodo = function (){
    console.log('Este es otro metodo');
}


// Uso de "THIS" en clases y en funciones constructoras

// this --- class
// this --- object --- class

class Sujeto01 {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const sujetoInstancia = new Sujeto01 ('Daniela', 25);
console.log(sujetoInstancia);

sujetoInstancia.nuevoMetodo = function (){
    console.log(`Mi nombre es ${this.nombre}`);
};