// El programa sin utilizar worker threads o child process, se bloquea al hacer una operacion costosa.
// En este caso, se utiliza worker threads para evitar que el hilo principal de Node.js se bloquee al calcular el Fibonacci de un número grande.
// El worker thread permite que la operación costosa se realice en un hilo separado, lo que permite que el servidor siga respondiendo a otras
// peticiones mientras se realiza el cálculo.



const express = require ('express')  // se importa le modulo de express, para de esta forma poder utilizarlo
const { Worker } = require('node:worker_threads') // Importa el módulo worker_threads para crear hilos de trabajo en Node.js
const path = require('node:path')
const {fork} = require('node:child_process')// Importa el módulo child_process para crear hilos de trabajo en Node.js
const app = express () // se hace el llamdo a la función del modulo de express. Apartir de aqui se puede ir utilizando dicho modulo.

function fibonacci (n){
    if(n < 2) return n
    return fibonacci (n - 1) + fibonacci (n - 2)
}

app.get('/block', (req, res)=>{
    const n = parseInt ( req.query.n) || 40
    res.send(`Fibonacci de ${n} es ${fibonacci(n)}`)
})
// este fragmento de codigo es parte de la implemetacion que se hizo con relacion al modulo de worker
app.get('/worker', (req, res)=>{
    const n = parseInt ( req.query.n ) || 40
    const path = require('node:path')
    const worker = new Worker(path.join(__dirname, 'worker.js'), {workerData: n}) // Pasa el número al worker como datos de trabajo
    worker.on('message', (result)=>{
        res.send (`Fibonacci de ${n} es ${result}`)
    })
    worker.on('error', (error)=> {
        res.status(500).send(error.message)
    })
})
// Aqui termina el framento de codigo dedicado a la implementacion del modulo worker

// este fragmento de codigo es parte de la implemetacion que se hizo con relacion al modulo de child process


app.get('/child', (req, res)=>{
    const n = parseInt ( req.query.n ) || 40
    const child = fork (path.join(__dirname, '/child.js')) // Pasa el número al worker como datos de trabajo
    child.send(n)
    
    child.on('message', (result)=>{
        res.send (`Fibonacci de ${n} es ${result}`)
    })

    child.on('error', (error)=> {
        res.status(500).send(error.message)
    })
})


// app.get('/child', (req, res)=>{
//     const n = parseInt ( req.query.n ) || 40
//     const path = require('node:path')
//     const child = new fork(path.join(__dirname, 'child.js')) // Pasa el número al worker como datos de trabajo
//     child.send(n)
//     child.on('message', (result)=>{
//         res.send (`Fibonacci de ${n} es ${result}`)
//     })
//     child.on('error', (error)=> {
//         res.status(500).send(error.message)
//     })
// })

// Aqui termina el framento de codigo dedicado a la implementacion del modulo child process

app.listen(3000, ()=>{
    console.log('Server running in port 3000')
})


// --------- anexos utiles ----------------
// autocannon -a 20 http://localhost:3000/fast
// npx nsolid-quickstart --saas 'OLOS)Za6Fv?A@zor)iF^u}0X::?+fyayCv0&HbB15a43b285-b5e5-4e81-9023-6a4b01700d2f.prod.proxy.saas.nodesource.io:9001' --exec index.js
// pnpm nsolid-quickstart --saas 'OLOS)Za6Fv?A@zor)iF^u}0X::?+fyayCv0&HbB15a43b285-b5e5-4e81-9023-6a4b01700d2f.prod.proxy.saas.nodesource.io:9001' --exec index.js
// curl http://localhost:3000/worker