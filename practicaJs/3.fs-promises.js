//Otra forma de leer un archivo con file system, sin tener que usar callbacks,
//  es usando Promesas, como se muestra a continuación:
const fs = require('node:fs/promises');

console.log("Leyendo el primer archivo...");
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log("primer texto", text);
    })

console.log('----------------->Hacer cosas mientras lee los archivos...');

console.log("Leyendo el segundo archivo...");
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text2 => {5
        console.log('Segundo texto', text2);
    })