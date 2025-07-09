const {Buffer} = require('buffer');//permite trabjar con cadenas de texto o transformar binarios a diferentes formatos

const bufferFromString = Buffer.from('Hola, este es un buffer de ejemplo', 'utf-8');// Transforma un string a un buffer
console.log('Buffer desde string:', bufferFromString);

const bufferAlloc = Buffer.alloc(10);//Te permite trabjar con un buffer de dimensiones espaecificas
console.log('Buffer alocado:', bufferAlloc);// va imprimir los 10 datos dispnibles en el buffer
bufferAlloc.write('Hola');//Escribe en el buffer
console.log(bufferAlloc);

const bufferToString = bufferAlloc.toString('utf-8', 0, 4);//Convierte el buffer a un string
console.log('Buffer a string:', bufferToString);