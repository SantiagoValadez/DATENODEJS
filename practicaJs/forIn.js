//Sintaxis de Bucle For In imprimiendo los valores dentro de un objeto

//-------> Bucle For In <-------
// Propiedad = valor
// Array, String
// item
// for (variable in objeto) {
//     // Codigo a ejecutar en cada iteración
// }

// Fragmento de codigo para imprimir todos los valores de una lista
// Se USA PARA RECORRER OBJETOS Y NO ARRAYS 
const listaDeCompras = {
    mazana: 2,
    banana: 5,
    naranja: 3,
    fresa: 4,
    kiwi: 6
}

for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}
// Fragmento de codigo para imprimir todos los valores de un objeto

for (fruta in listaDeCompras) {
    console.log(fruta)
}