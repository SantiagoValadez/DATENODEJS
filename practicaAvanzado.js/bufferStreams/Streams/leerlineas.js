const fs = require ('node:fs')// importacion de los modulos. fs te permite manioular archivos del sistema.
const readLine = require ('node:readline') //Modulo que te permite leer lineas de texto una por una desde una fuente de entrada (como un archivo en consola)

async function leerLineas() { // defines una función asincrona. Esto para poder usar await dentro de ella y manejar los flujos de datos (Streams) de manera mas clara y bloqueante.
    const fileStream = fs.createReadStream('contenido.txt', 'utf8') // "fs.createReadStream" abre el archivo "contenido.txt" en modo lectura, pero no lo carga completo en memoria. Stream: Los datos se van cargando por partes (chunks), l que es eficiente para archivos grandes
    const rl = readLine.createInterface({ // crea una interface de lectura por linea
        input: fileStream, // le decimos que la fuente de datos, sera el archivo que abrimos
        crlfDelay: Infinity // Asegura que las lineas se reconozcan correctamente, incluso si tienen saltos de linea. lo que ecita que se rompan en medio.
    })
    for await (const line of rl){ // este "for await of" es especial para iterar sobre streams asincronos. Casa "line", representa una linea completa del archivo.
        console.log(`- : ${line}`) // imprime la liena con un texto previo, en este caso especificado como guon medio:
    }
}

// Manejo de errores.
leerLineas().catch((err) =>{ // Ejecuta leer lineas. Si ocurre un error, por ejemplo: el archivo ya no exite, se deberia impirmir el error en consola.
    console.error(err)
})