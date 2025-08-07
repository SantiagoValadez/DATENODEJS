
// 1- Tareas de JavaScript 
// 2- Microtareas de webAPI
// 3- Tareas webAPI



// ----------------------------------> primer ejercicio <-------------------------------------------


console.log ('Tarea 1');// tarea de javaScript


setTimeout(()=>{
    console.log ('Tarea 2'); // Tareas de webAPI
}, 0);

Promise.resolve().then(()=>{
    console.log ('Microtarea 1'); //MicroTarea de webAPI con una promesa
});


console.log ('Tarea 3'); // Tarea de javaScript

// --------------------------------> segundo ejercicio <---------------------------------------------

console.log ('Inicio del script'); // Se puede considerar como una tarea nativa de javaScript. Por lo que tiene prioridad en el orden de ejecución

process.nextTick(() =>{ // se comporta de manera similar a una promesa, pero es una función que permite posponer su ejecución hasta despues de que la operación. actual del stack finalice.
    console.log('Ejecutando process.nextTick() microtask')
})

setTimeout(()=>{ // Se declara como callback. Pero al ser un TimeOut. Tienen menos prioridad en el orden de las ejeciciones de javaScript
    console.log('Ejecutando setTimeOut() callback')
})

setImmediate(()=>{ // Se declara como un callback. P?ero al ser un setImmediate. Tiene menos prioridad en el orden de ejecución de javaScript
    console.log('Ejecutando setImmediate() callback')
})

const fs = require ('node:fs')

fs.readFile(__filename, 'utf8', (err, data)=>{ // se creo una función que lee su propio archivo. Al no ser un setTime, tiene el segundo lugar en el orden de prioridad en javaScript
    console.log('Ejecutando I/O callback')
})

console.log('Fin del Script') // Se puede considerar como una tarea nativa de javaScript. Por lo que tiene prioridad en el orden de ejecución