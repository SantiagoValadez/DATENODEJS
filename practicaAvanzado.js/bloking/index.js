// Ejercicio con uso del framework express


// se ocupa instalar autocannon //autocannon -a 20 http://localhost:3000/fast (para empezar a hacer pruebas de carga)
// Se ocupa instalar express 
// se ocupa instalar pnpm  (Ejemplo de como inicializar las pruebas de procesos, utilizando Nsolid) -npx nsolid-quickstart --saas 'OLOS)Za6Fv?A@zor)iF^u}0X::?+fyayCv0&HbB15a43b285-b5e5-4e81-9023-6a4b01700d2f.prod.proxy.saas.nodesource.io:9001' --exec index.js

const express = require('express') // Es el framework web que se usa para crear rutas y levantyar servidores http
const fs = require ('node:fs') // nos permite leer archivos del sistema, en este caso se usa fs.readFileSync para leer un archivo JSON grande de forma síncrona

// Json parse() convierte el texto del archivo Json en un array u objeto de javaScript
// fs.readFileSync lee el contenido del archivo de forma sincronica.
// largeFile: contendra el contenido del archivo, Imagina que son 100,000 objetos o mas 
// ⚠️⚠️⚠️⚠️⚠️ Al ser sincronico, esto puede bloquear el hilo principal, si el archivo es demasiado grande ⚠️⚠️⚠️⚠️⚠️⚠️⚠️
const largeFile = JSON.parse(fs.readFileSync('large.json', 'utf8')) 
const app = express() // Aqui se inicializa una instancia de express. A partir de aqui se pueden definir rutas y middlewares (app.get(...), app.post(...),etc.)

//  SE IDENTIFICA DE MANERA SENCILLA QUE ES EL SIGUIENTE FRAGMENTO DE CODIGO app.get() es un endpoint de tipo GET. Por las siguientes razones:
// Este patrón siempre define un endpoint tipo GET en Express.
// También puedes tener otros métodos:
// app.post('/crear', handler)
// app.put('/actualizar/:id', handler)
// app.delete('/borrar/:id', handler)
app.get('/fast', (req, res)=> { // Este endpoint responde con texto de inmediato. No realiza ninguna operacion costosa. 
    res.send('Endpoint rapido') // Es util para comparar contra otros endpoints que si consumen muchos recursos
})
// se recorre sincronicamente todo el array largeFile item por item y se guarda en un array result
// Esto puede demorar bastante si el archivo tiene muchos datos y bloquea el hilo principal de node.
// Mientras se ejecuta esta ruta, ningun otro endpoint podra atender peticiones hasta que termine.
app.get('/block', (req, res)=> {
    const result = []

    for(const item of largeFile){
        result.push(item)
    }

    res.send(`Endpoint bloqueado: ${result.Length} items`)
})
// En lugar de procesar todo el array de un solo golpe, lo divide en chunks o bloques. 
// usa setImmediate para decirle a node: "Procesa el siguiente bloque de codigo, despues de que termines otras tareas pendientes".
// Esto permite que el event loop no se bloquee y otras peticiones como fast se sigan atendiendo.
app.get('/unblock', (req, res)=> {
    const result = []
    let index = 0
    const chunkSize = 1000 // Tamaño del chunk a procesar

    function processChunk(){
        const end = Math.min(index + chunkSize, largeFile.length)
        while(index < end){
            result.push(largeFile[index])
            index++
        }
        if(index < largeFile.length){
            setImmediate(processChunk) // Llama a processChunk de forma asíncrona
        } else {
            res.send(`Endpoint no bloqueado: ${result.length} items`)
        }
    }
    processChunk() // Inicia el procesamiento de chunks
})
// Aqui se levanta el servidor de express en el puerto 3000
// puedes visitar http://localhost:3000/fast para ver el endpoint , pero tambiens e puede hacer lo mismo con /block y /unblock

app.listen(3000, ()=> {
    console.log('Server is running on port 3000')
})

module.exports = app; // se hace la exportacion de la app para poder hacer pruebas unitarias con jest

// se ocupa instalar autocannon //autocannon -a http://localhost:3000/fast (para empezar a hacer pruebas de carga)
// Se ocupa instalar express 
// se ocupa instalar pnpm


