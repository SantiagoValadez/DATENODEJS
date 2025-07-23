// ---------------------> HERRAMIENTA MANUAL PARA HACER DEBUGGING <---------------------

// Codigo que simula una operacion costosa. Hace uso de un console.time para medir el rendimiento (Aunque haga flata un console.timeEnd())
// El recorrido del flujo va en la siguiente dirección  procesoB() -> operacionA() -> operacionCompleja()

function operacionCompleja (){
    // ---------------------> HERRAMIENTA PARA HACER DEBUGGING USANDO INSPECTOR <---------------------
    debugger // Es importante que para abrir el codigo en el debbuger de node en chrome, se tiene que usar en la terminal de tu proyecto lo siguiente
    // node --inspect-brk "Nombre de tu archivo sin las comillas"
    // Cabe decir que tambioen se pueden usar herranmientas de debbuging desde Visual estudio Code. Solo en la seccion que esta dedicada para ese fin.
    console.time ('operacionCompleja') // inicia un temporizador con el nombre 'operacionCompleja' para medir el tiempo quie tarda en ejecutarse
    console.log ('Realizando operacion compleja') // Se muestra en consola que estas usando una operación pesada
    for (let i = 0; i < 100000; i++){ // Bucle que se ejecuta 100,000 veces
        // simula un claculo
        Math.sqrt(i) // calcula la raiz cuadrada de i en cada iteración. No guarda el resultado, solo simula una operacion costosa en CPU.
    }
    console.log('OperacionCompleja')
    console.timeEnd('operacionCompleja') // Muestra en mensaje al finalizar el bucle
    console.trace(' Fin de la operacionCompleja') // imprime una traza de pila (stack trace) para mostrar coo se llego hasta aqui. (Es util para depuración.)
}

function operacionA (){ // Función que llama directamenta a funcion compleja
    operacionCompleja()
}

function procesoB (){ // Llama a operacionA que a su vez llama a aoperacion comopleja
    operacionA ()
}

procesoB (); // Es la llamada inicial que inicia todo el flujo de ejecución.




