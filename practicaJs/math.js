const entero = 42;
const pi = 3.14159;
console.log(typeof entero, typeof pi);// Te especifica el tipo de dato que ha sido asignado a
// cada variable, en este caso number.

const cientifico = 1.5e10; // Notación científica

// suma resta, multiplicación y división
const suma = 5 + 3; // Suma
const resta = 10 - 4; // Resta
const multiplicacion = 6 * 7; // Multiplicación
const division = 20 / 5; // División

// Modulo y exponenciación
const modulo = 10 % 3; // Módulo (resto de la división)
const exponenciacion = 2 ** 3; // Exponenciación (2 elevado a la 3)
console.log('Modulo: ', modulo, 'Exponenciación: ', exponenciacion);

//Presición de números
const resultado = 0.1 + 0.2; // Resultado esperado: 0.3
console.log('Resultado de 0.1 + 0.2:', resultado); // Imprime 0.30000000000000004
console.log(resultado.toFixed (1) )
console.log(resultado === 0.3 )

//Operaciones Avanzadas 
const raizCuadrada = Math.sqrt (16)
const valorAbsoluto = Math.abs (-7)
console.log (valorAbsoluto)
