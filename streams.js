const fs = require('fs');

const readbleStream = fs.createReadStream('js.txt', { encoding: 'utf8' });
const writableStream = fs.createWriteStream('output-js.txt');

readbleStream.on('data', chunk => {
    console.log('chunk:', chunk);
    writableStream.write(chunk);
});

readbleStream.on('end', () => {
    console.log('termino la lectura del archivo');
    writableStream.end();
});

readbleStream.on('error', err => {
    console.error('Error al leer el archivo:', err);
});
writableStream.on('error', err => {
    console.log('Archivo copiado correctamente', err);
});