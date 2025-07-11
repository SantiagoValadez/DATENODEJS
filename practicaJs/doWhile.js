//Sintaxis de Bucle DoWhile imprimiendo los valores dentro de un array

//-------> Bucle Dowhile <-------
// do {
//     // Codigo a ejecutar en cada iteración
// } while (Condicion);

// Fragmento de codigo para imprimir todos los valores de una lista

//LA DIFERENCIA CON UN WHILE ES QUE PRA DOWHILE PRIMERO SE EJECUTA EL CODIGO 
// Y LUEGO SE EVALUA LA CONDICION, POR LO QUE SIEMPRE SE EJECUTA AL MENOS UNA VEZ.

let contador = 0;

do {
    console.log(`El contador es: ${contador}`);
    contador++; // Incrementa el contador en 1
} while (contador < 20); // La condición se evalúa después de ejecutar el bloque de código
// Esto asegura que el bloque se ejecute al menos una vez, incluso si la condición es falsa 
// al inicio.