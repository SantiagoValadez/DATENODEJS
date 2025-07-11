let string1 = 'Hola, soy un string';
let string2 = "Hola, soy otro string";
// Usando comillas invertidas (template literals) se puede crear un string que acepte
// el uso de variables dentro de él, lo que se conoce como interpolación de cadenas.
let string3 = `${string1} y yo soy el string que sirve para concatenar`;
console.log(string3);
//Esta es otra forma de concatenar strings, usando el operador +:
let string4 = string1 + ' ' + string2;
console.log(string4);

let frase = 'Hola, soy una frase que contiene un string';
console.log(frase.length);// Imprime la longitud de la frase
console.log(frase.toUpperCase());//Esta función convierte la frase a mayúsculas
console.log(frase.toLowerCase());//Esta función convierte la frase a minúsculas
console.log(frase.substring(0, 4)); // Imprime los primeros 4 caracteres de la frase y 
// es importante que podemos dictar de a apartir de que caracter queremos empezar a imprimir
// y hasta que caracter queremos terminar de imprimir.
