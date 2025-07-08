//Metodos de salida

// console.log('Este es un ejemplo de uso de la consola en Node.js');
// console.info('console.info() similar a console.log pero para mostrar información');
// console.warn('Console,warn() para mostrar advertencias');
// console.error('console.error() para mostrar errores');

//Tablas

// const usuarios =[
//     {nombre: 'Daniela',edad: 28, rol: 'Desarrollador'},
//     {nombre: 'Juan',edad: 34, rol: 'Diseñador'},
//     {nombre: 'Fany',edad: 22, rol: 'Gerente'},
// ];

// console.log(usuarios);
// console.table(usuarios);


//Time
console.time('Operación');
    for (let i = 0; i < 1000000; i++) {
        // Simula una operación
    }
console.timeEnd('Operación');

//count
console.count('Contador');
console.count('Contador');
console.count('Contador');
console.count('Contador');
console.count('Contador');
//countReset
console.countReset('Contador');
console.count('Contador');
console.count('Contador');
console.count('Contador');
console.count('Contador');

//Agrupación

console.group('Grupo principal');
console.log('información');
console.group('subgrupo');
console.log('información del grupo 1');
console.groupEnd();
console.group('sub grupo 2');
console.log('información subgrupo 2')
console.groupEnd();
console.group('Grupo final');

//Afirmaciones

console.assert(1===1, 'Esto no se muestra');
console.assert(1==2, 'Esto si se muestra');

//Clear
// console.clear();

//Trace
console.trace('Mostrar la pila de la llamada ')




