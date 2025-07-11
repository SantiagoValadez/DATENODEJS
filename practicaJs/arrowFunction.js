//Arroe fucntion

// Comparacion de estructura entre arrow function y function normal

// funcion normal
// function almuerzo (proteina, verdura){
//     return `${proteina} ${verdura}`
// }

// almuerzo ('🍉', '🥦')


// //Arrow function
// const almuerzo = (proteina, verdura) => {
//     return `${proteina} ${verdura}`
// }

// almuerzo ('🍉', '🥦')

// // Otros ejemplos de arrow function 

// //opcion 1
// const greeting = function (name){
//     return `Hello, ${name}`
// }
// //opcion 2 - implicit return
// const newgretting = (name) => {
//     return `Hello, ${name}`
// }
// //opcion 3
// const newgrettingImplicit = (name) => `Hello, ${name}`; // cuando solo se pasa un parametro, se pueden quitar los paréntesis
// const newgrettingImplicitWithTowParameters = (name, lastName) => `Hello, ${name} ${lastName}`;// // cuando se pasan dos o más parámetros,
// //  se deben mantener los paréntesis 


//Lexical function 

// -----------> Estructura de las arrow function <------------

// palabraReservadaLet nombreDeLaFuncion = (parametros) => {
//     Codigo a ejecutar
// }

const functionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

functionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility'); // Uncle Ben says: With great power comes great responsibility
functionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus'); // undefined says: With great power comes great responsibility
// En el caso de la función tradicional, 'this' se refiere al objeto 'functionalCharacter', mientras que en la función flecha, 'this' no se vincula al objeto,
// lo que resulta en 'undefined' al intentar acceder a 'this.name'.
// Esto se debe a que las funciones flecha no tienen su propio contexto 'this', sino que heredan el contexto del lugar donde fueron definidas.
// Por lo tanto, es importante tener en cuenta que las funciones flecha no son adecuadas cuando se necesita acceder al contexto del objeto actual,
// como en el caso de métodos de objetos o clases.
// En resumen, las funciones flecha son útiles para mantener un contexto léxico y evitar problemas de 'this', pero no deben usarse cuando se necesita
// un contexto dinámico.


// -----------> FORMA DE ESCRIBIR UNA FUNCION PURA CON ARROW FUNCTION  <------------
let suma = (a,b) => a+b; // de manera de comentario, solo se usan las llaves cuando se van a pasar objetos dentro de ellas
console.log(suma(2,3)); // 5