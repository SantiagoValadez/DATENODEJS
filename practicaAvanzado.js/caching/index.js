const express = require ('express')  // se importa le modulo de express, para de esta forma poder utilizarlo
const {LRUCache} = require ('lru-cache') // se importa la clase lru-cache, Esta clase se usa para almacenar tempralmente, aplicando la estrategia "Least recently used" (elimina el menos usado) 
const app = express () // se hace el llamdo a la función del modulo de express. Apartir de aqui se puede ir utilizando dicho modulo. Esto para definir rutas y manejar petciones


//Se crea una nueva instancia de cache en memoria.
const cache = new LRUCache ({
    // Max 1000 itmes (numero maximo de items que va a alamcenar el cache=)
    max: 1000,
    // 1 hour
    ttl: 1000 * 60 * 60 // se establece el tiempo de vida de la cache, en este caso una hora (cuanto va durar la cache) (ttl = time to live )GRA
})

// Funcion de finbonacci que calcula el numero de Fibonacci de n
// Esta funcion no es eficiente ( usa recursion simple), por loq ue consimira bastante cpu para numeros grande
function fibonacci (n){
    if(n < 2) return n
    return fibonacci (n - 1) + fibonacci (n - 2)
}

// Lee parametros n de la url (/block?n=20)
// Si n, no se proporciona entonces se usa 40 por defecto
// Calcula el numero de fibonacci sin cache, y responde con el resultado
// Esto puede bloqeuar el event loop si el numero es grande 
app.get('/block', (req, res)=>{
    const n = parseInt ( req.query.n) || 40
    res.send(`Fibonacci de ${n} es ${fibonacci(n)}`)
})

// Ruta / cache
// Verifica si el resultado ya esta en cache (cache.has(n))
// Si existe: Lo de devuelve directamente (rapido)
// si no: lo calcula, lo guarda en cache (cache.set(n, result)) y lo devuelve 
// Esto mejora el rendimiento al evitar calculos repetidos.
app.get('/cache', (req, res)=>{
    const n = parseInt ( req.query.n) || 40 // si el usuario accede a : http://localhost:3000/cache?n=20, entonces n = 10. Si no se proporciona n, se usa 40 por defecto
    if (cache.has(n)) { // Aqui se le pregunta al objeto cache si ya tiene guardado el resultado deel numero de Fibonacci de n. Esto se hace con el metodo .has(n) Devuelve true si valor ya exite en cache. Devuelve flase si el no se ha calculado o si ya expiro.
        res.send(`Fibonacci de ${n} es ${cache.get(n)}`) // Con .get se accede al valor previamente calculado y guardado en cache. Si el valor no existe, devuelve undefined. por lo que no se vuelve a ejecutar la funcion fibonacci(n). Ahorra mas cpu, responde mas rapido y evita bloquear el servidor.Ejemplo: el primer acceso /cache?n=20: se calcula. Segundo acceso a /cache?m=20: devuelve el resultado de cache.get(n) sin volver a calcularlo.
    } else { // Si el valor no esta en cache, se calcula llamando a la funcion fibonacci(n) para hacer el calculo, luego lo guarda en cache con cache.set(n, result) y finalmente responde al cliente con el resultado.
        const result = fibonacci(n) // se llama a la funcion fibonacci(n) para calcular el numero de Fibonacci de n
        cache.set(n, result) // luego se guarda el resultado en cache con cache.set(n, result) para que la proxima vez que se solicite el mismo numero, no se vuelva a calcular. Esto asocia la clave n al resultado "result"
        res.send(`Fibonacci de ${n} es ${result}`) // La proxima vrx wur alguiien pida ese mismo n, ya no sera necesario calcularlo, ya que se devolvera el resultado guardado en cache. Esto mejora el rendimiento de la aplicacion.
    }
})

// Inicia el servidor en le puerto 3000
// imprime en consola un mensaje para indicar que el servidor esta corriendo
app.listen(3000, ()=>{
    console.log('Server running in port 3000')
})

// --------- anexos utiles ----------------
// autocannon -a 20 http://localhost:3000/fast
// npx nsolid-quickstart --saas 'OLOS)Za6Fv?A@zor)iF^u}0X::?+fyayCv0&HbB15a43b285-b5e5-4e81-9023-6a4b01700d2f.prod.proxy.saas.nodesource.io:9001' --exec index.js
// pnpm nsolid-quickstart --saas 'OLOS)Za6Fv?A@zor)iF^u}0X::?+fyayCv0&HbB15a43b285-b5e5-4e81-9023-6a4b01700d2f.prod.proxy.saas.nodesource.io:9001' --exec index.js
// curl http://localhost:3000/worker
// pnpm add lru-cache // comando para instalar un modulo en node para el manejo de la cahce. Cabe decir que es uno de los modulos mas usados
// npm install lru-cache@latest. ES IMPORTANTE VERIFICAR LA VERSION QUE SE TIENE INSTALADA. YA QUE DEPENDIENDO DE ELLA, PUEDE CAMBIAR LA SINTAXIS DE USO.


// Readme: En el documento.

// ## 📦 Proyecto: Cache con Express y Fibonacci

// Este proyecto es una pequeña API en Node.js que expone dos endpoints:

// - `/block`: calcula el número de Fibonacci de forma recursiva y **sin caché**, lo que puede ser lento para valores grandes.
// - `/cache`: utiliza un sistema de **caché en memoria con LRU (Least Recently Used)** para almacenar los resultados y acelerar futuras peticiones.

// ### Tecnologías utilizadas
// - `express`: framework web para Node.js
// - `lru-cache`: módulo de caché basado en el uso más reciente

// ### Objetivo
// Este ejemplo demuestra cómo mejorar el rendimiento de una función costosa (como Fibonacci recursivo) usando caché con expiración.
// Ideal para aprender sobre optimización de rutas en APIs con Node.js.
