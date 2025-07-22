// Esto sirve para leer archivos usando "FS" cuando el archivo de texto no es muy grande, pero para archivo de mayor tamaño se aconseja el uso de Streams.
const fs = require ('node:fs')


console.log ('Ejmeplo de leer un archivo usando solo Fs: ')
const data = fs.readFileSync('entrada.txt', 'utf-8')

console.log(data);

// Esto sirve la leer un archivo, para este caso se usara los Streams para optimizar el espacio en memoria. 
// Nota: Los streams funcionan con buffers, por que hacen uso de la iformación con codigo binario.

const streams = fs.createReadStream('entrada.txt', { encoding:'utf-8'})

console.log('Ejemplo de leer un archivo usando Streams: ')
console.log('contenido: ')
streams.on( 'data', (chunk) => {
    console.log(chunk)
});

streams.on('end', () => {
    console.log('Fin del archivo')
});

streams.on('error', (err) => {
    console.error('error', err)
});