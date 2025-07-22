const fs = require ('node:fs')// importación de mmodulos. fs para la manipulación de arhivos
const { Transform, pipeline } = require ('node:stream') // transfor: Objetos del modulo Stream. Pipeline: función para encadenar varios streams, manejando errores automaticamente.

const toUpperCase = new Transform({ // Stream que recibe datos, los convierte a mayusculas y los emite
    transform (chunk, encoding, callback){ // porción de datos que se estan leyendo
        this.push(chunk.toString().toUpperCase()) // this.push: envia el resultado tranformado al siguiente Stream
        callback() // indica que la transformación ya termino y se puede continuar
    }
})

pipeline( // Encadenamiento con pipiline
    fs.createReadStream('entrada.txt','utf8'), //Abre el archivo "entrada.txt" para leerlo como texto (utf-8). Es un readable stream
    toUpperCase, // Transforma el texto en mayusculas. Es un transformStream
    fs.createWriteStream('salida.txt','utf8'), // Crea un flujo de escritura de un archivo. Todo se guardara en el archivo que se llama "salida.txt". Utf-8 se refiere a aspectos con relación al lenguaje
    (err) => { // Este callback se ejecuta cuando todo el codigo se ha terminado en caso de que haya habido algun error
        if (err){
            console.log(err)
        }
    }
)