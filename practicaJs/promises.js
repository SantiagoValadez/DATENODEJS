

// -----------> ESTADOS DE LAS PROMESAS EN JS Y ESTRUCTURA BASICA <----------

// promise() // de esta manera se declara una promesa
// pending // pendiente a que se empiece a generar la promesa
// fullfiled // Este esatdo indica que la promesa se ha resuelto
// reject // indica que la promesa no se resolvio

// -----------> LAS PROMESAS TE DEVUELVEN 2 TIPOS DE CALLBACKS <--------------

// resolve // Cuando la promesa se resulve de forma exitosa
// reject // cuando la promesa no se puede resolver

// ----------> METODOS DE LAS PROMESAS <----------------------------

// then () // es el metodo que se ejecuta cuando la promesa se resuelve. Para ello, primero tiene que tener un estado fullfilled, y el callback nos tiene que 
//  indicar que ha sido resuelto
// cath () // es el metodo que se va ejecutar cuando la promesa no se haya resuelto y en el se va indicar, cuales son las razones por las que no ha hecho

// ejemplo practico de como funcioan las promesas en Js

const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessfull = false; // Cambia a true para simular una operación exitosa
        if (operationSuccessfull){
            resolve('La operacion fue exitosa');
        } else {
            reject('Fallo la operación');
        }
    },2000);
});

promise
.then((successMessage)=> {
    console.log(successMessage);
})
.catch((errorMessage)=> {
    console.log(errorMessage);
});