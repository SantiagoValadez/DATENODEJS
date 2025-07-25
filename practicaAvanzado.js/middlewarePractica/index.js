function runMiddlewares(req, res, middlewares){ // se pasan 3 paranmetros a la función cuando se corre un middleware. Por lo general (request, response y next)
    let index = 0;
    const next = () => {
        if (index < middlewares.length){ // se una función que recorre todos los espacios, para imprimir toda la secuencia.
            const middleware = middlewares[index++];
            middleware(req, res, next);
        }
    };
    next(); // inicia la cadena de ejecución de middlewares
}

const middleware1 = (req, res, next) => {
    console.log('Middleware1: Autenticación de la petición');
    next (); // Indica que pasa a la siguiente secuencia de ejecución
}

const middleware2 = (req, res, next) => {
    console.log('Middleware2: Procesando la petición')
    next (); // Indica que pasa a la siguiente secuencia de ejecución
}

const middleware3 = (req, res, next) => {
    console.log('Middleware3: Finalización de la petición')
    next (); // Indica que pasa a la siguiente secuencia de ejecución
}

const req = {}
const res = {}

runMiddlewares (req, res, [middleware1, middleware2, middleware3]); // Siempre se ejecuta en el orden en el que se defina