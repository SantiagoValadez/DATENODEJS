// que es un memoryleak
// como se comporta
// heramientas para poder visualizarlo

// importacion de modulos para poder trabajar con express y con eventos
const express = require('express')
const EventEmitter = require ('node:events')


// Se crea la clase LeakyEmitter que extiende de EventEmitter.
// cosnt emitter : es la instancia que utlizaremos para emitir  y poder escuchar eventos.
class LeakyEmitter extends EventEmitter {}
const emitter = new LeakyEmitter ()

// "app" es la instancia de aplicación de Express
// listeners: Arreglo donde se va guardando todas las funciones listener que se registran al evento. Esto es inmportanyte porque no se eliminan nunca.
// LO QUE REPRESENTA UNA POTENCIAL FUGA DE MOMORIA
const app = express ()
const listeners = []

// Cada vez que se visita http://localhost:3000/memory
// 1. Se crea un nuevo listener (una funcion) que imprime algo al recibir el evento 'data'.
// 2. Se guarda el arreglo listners
// 3. Se registra en el emitter con on('data', listener) loq ue lo deja actiuvo definitivamente.
// 4. Luego se emite un evento 'data' con un objeto {id: 1, message: 'hola' }, por lo tanto, se dispara el listener.
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️CADA QUE SE VISITA MEMORY, SE AGREGA UN NUEVO LISTENER QUE NUNCA SE ELIMINA POR LO QUE LA MEMORIA CRECE SIN CONTROL⚠️⚠️⚠️⚠️⚠️⚠️⚠️
app.get('/memory', (req, res)=>{
    const listener = (data) => {
        console.log (`Evento recibido ${data}, req, url`)
    }
    listeners.push(listener)
    emitter.on('data', listener)

    emitter.emit('data', {id: 1, message: 'hola'})

    res.send('Se agrego el listener y se mantiene en memoria')
})

// Este código sirve para monitorizar si hay crecimiento de memoria con el tiempo. Si visitas /memory muchas veces, deberías notar que el uso de heap
//  aumenta y nunca baja, lo que confirma la fuga.

 setInterval (()=>{
    const used = process.memoryUsage()
    console.log(`Uso de heap: ${(used.heap /1024/1024).toFixed(2)} MB`) // MEMORIA USADA POR LOS OBJETOS JS
    console.log(`Uso de rss: ${(used.rss /1024/1024).toFixed(2)} MB`) // MEMORIA USADA POR EL PROCESO DE NODE
 })

 // Levanta el servidor en el puerto 3000
// Puedes visitar http://localhost:3000/memory para ver el endpoint y empezar a generar
// una fuga de memoria. Cada vez que lo visitas, se agrega un nuevo listener que nunca
// se elimina, lo que provoca un aumento constante en el uso de memoria.
// Puedes detener el servidor cuando veas que el uso de memoria es muy alto.
// Puedes visitar http://localhost:3000/memory para ver el endpoint y empezar a generar
// una fuga de memoria. Cada vez que lo visitas, se agrega un nuevo listener que nunca
// se elimina, lo que provoca un aumento constante en el uso de memoria.
// Puedes detener el servidor cuando veas que el uso de memoria es muy alto.
 app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000')    
 })
