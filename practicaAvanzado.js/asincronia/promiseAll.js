
const tarea1 = () => new Promise(resolve => { // se declara la función flecha llamada tarea1. y acada vez que se ejecute tarea1() se regresa una nueva promesa. despues con "new Promise": se declara la promesa. (ocupa de 2 parametros, pero para este ejemoplo solo se usa 1: resolve.)
  setTimeout(() => { // Dentro de la promesa, se usa setTimeout, lo que hace que la función se ejecute despues de 1000 milisegundos. (1seg). Una vez pasado el segundo,  se hace la llamada a resolve. Lo que significa que la promesa se cumple y se imprime el console.log
    resolve("Resultado de la tarea 1") // se imprime el cosnsole.log una vez que la promesa se cumple.
  }, 1000)
})

const tarea2 = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('Resultado de la tarea 2')
    }, 1500)
})

const tarea3 = () => new Promise(resolve => {
  setTimeout(()=> {
    resolve('Resultado de la tarea 3')
  }, 200)
})

// Se da la opción de que puede pasar en caso de error. Para este ejemplo no se considera tan necesario, pero se hace por buena practica
Promise.all([tarea1(), tarea2(), tarea3()])
  .then ((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.error(error)
  })

  console.log();
// ------------------------> EJERCICIO PRACTICO USANDO GENERATOR <-----------------------

// FIBONACCI

function* fibonacci (){ // El asterisco indica que la función se puede pausar y reanudar su ejecución utilizando "Yield". Ademas esto indica que se trata de una función generadora, que sirve para generar secuencias, como en este caso que se trata de nuemros de fibonacci.
  let current = 0; // Aquii se esta indicando el numero actual de la secuencia
  let next = 1; // con next, se indica que el numero que seguira despues de current
  while (true) { // indica que es un bucle infinito. Lo cual es una de las cualidades de las funciones generadoras. Pero no se ejecuta todo de golpe, se detiene en cada Yield.
    yield current; // devuelve el valor actual (current) y pausa la ejecución de la función. cuando se llame a fib.next(), la función se reanuda justo despues del Yield
    [current, next] = [next, current + next] // Es una función por destructuración. calculando el siguien valor del numero da fibonacci. 
  }
}

const fib = fibonacci() // aqui se crea un iterador de la función genradora "fibonacci()" El objeto fib se puede usar para obtener el siguiente valor con fib.next().

for (let i = 0; i<10; i++){ // Use del bucle for. Como en sus parametros esta indicado, el bucle se va a ejecutar un total de 10 veces.
  console.log('dentro del ciclo: ' +fib.next().value) // En cada iteracion se haca una llamda a "fib.next()" lo cual devuelve un objeto {value, done}// .value es el que va contener el siguiente numero de fibonacci
}

console.log(fib.next().value) // va imprimir los resultados en consola
console.log(fib.next().value) // va imprimir los resultados en consola
console.log(fib.next().value) // va imprimir los resultados en consola



