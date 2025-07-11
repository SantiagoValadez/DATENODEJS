//Sintaxis de Bucle For

//-------> Bucle For <-------
// for (variable; condicion; incremento) {
//     // Codigo a ejecutar en cada iteración
// }

// Fragmento de codigo para imprimir todos los valores de una lista
// Se USA PARA RECORRER ARRAYS Y NO OBJETOS

let list = ["Hi", "eat", "sleep", "code", "repeat"];

for (let i=0; i < list.length; i++) {
    console.log(list[i]);
} 

console.log(list.length); // Imprime la longitud de la lista