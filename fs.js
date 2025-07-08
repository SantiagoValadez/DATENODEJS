const { log } = require('console');
const fs = require('fs');

const fileName = 'example.txt';

//Crear
fs.writeFileSync(fileName, 'Hola, este es un archivo de ejemplo');
console.log('Archivo creado correctamente');

//Leer
const content = fs.readFileSync(fileName, 'utf8');
console.log('File content:', content);

//Actualizar
fs.appendFileSync(fileName, '\nEsta es una nueva linea');
console.log('Archivo actualizado correctamente');

//Eliminar
fs.unlinkSync(fileName);
console.log('Archivo eliminado correctamente');



