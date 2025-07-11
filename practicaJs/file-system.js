const fs = require('node:fs');

const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),// es un archivo
    stats.isDirectory(), // es un directorio
    stats.isSymbolicLink(), // es un enlace simbólico
    stats.size, // tamaño del archivo en bytes 
);

