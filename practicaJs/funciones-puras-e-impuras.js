// funciones puras
// 2 Caracteristicas fundamentales. Dada una misma entrada, vamos a cobtener simpre la misma salida y no producen efectos secundarios (side effects.
// lo que quiere decir es que no sera diferente a lo largo del tiempo que no cambiara o dejara de ser pura).

// Side effects (Todo esto lo produce y por resultado, ocasiona que las funciones puras dejen de serlo)
// 1. Modificar variables globales 
// 2. Modificar parametros 
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o en consola
// 5. Manipulacion del DOM
// 6. Obtener la fecha y hora actual

// Ejemplo de estructura de función Pura
function suma(a, b) {
    return a + b; // Siempre devuelve la misma salida para los mismos parámetros
}
console.log(suma(2, 3)); // Imprime 5, siempre que los parámetros sean 2 y 3 ---> ESTO NOS IMPRIME LOS PARAMETOS QUE LE PASAMOS ANTERIMENTE A LA FUNCIÓN

// -----------> FORMA DE ESCRIBIR UNA FUNCION PURA CON ARROW FUNCTION  <------------
let suma = (a,b) => a+b; // de manera de comentario, solo se usan las llaves cuando se van a pasar objetos dentro de ellas
console.log(suma(2,3)); // 5


// Funcion pura
function square(x) {
    return x * x; // Siempre devuelve el cuadrado del número
}
 function addTen (y){
    return y + 10; // Siempre devuelve el número más diez
}

const number = 5;
const finalResult = addTen(square(number)); // Composición de funciones puras
console.log(finalResult); // Imprime 35, siempre que number sea 5

//Ejemplo de funciones que son impuras y su esrtructura.
function sum (a,b){
    console.log('A: ', a) //Al mandar a imprimir en consola, se produce un efecto secundario (side effect)
    return a + b; // Efecto secundario: imprime en consola
}

let total = 0 // esta es una varible global, por lo que si se modifica, se produce un efecto secundario (side effect)
function sumWithSideEffect (a){
    // total = total + a 
    total += a // Es lo mismo que la linea de codigo anterior. Pero suprimiendo un poco laa liena de codigo
}

