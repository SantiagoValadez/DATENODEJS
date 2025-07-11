// se les conoce como tipo de datos primitivos a los bloque de construcción
// básicos de JavaScript, que son los siguientes:

let nombre = 'Daniela';
let edad = 27;
let esMayorDeEdad = true;
let idUsuario = Symbol('Unico');

console.log('Simbolo: ', idUsuario);

// Se les conoce como tipo de datos complejos a los que son dinamicos y se pueden utilizar
// para almcacenar colecciones de datos y entidades más complejas. Estos son los siguientes:

// Ejemplo de como declarar un objeto en JavaScript:
let usuario = {
    nombre : 'Daniela',
    edad : 27,
    esMayorDeEdad : true,
    idUsuario : Symbol('Unico'),
}

console.log ('Datos de Usuario Daniela: ', usuario);

//Ejemplo de como declarar un Array en JavaScript:
let frutas = ['Manzana', 'Pera', 'Naranja', 'Fresa'];
console.log('Las futas son: ', frutas);

//Ejemplo de como declarar una función en JavaScript:
function saludar (){
    console.log('Hola, soy una función que saluda!');
}

