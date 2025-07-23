Resumen

El código asíncrono es fundamental para aprovechar al máximo Node.js y evitar bloquear el Event Loop. Las promesas y los generadores son dos métodos
clave para manejar asincronía eficientemente. Las promesas nos proporcionan valores futuros, mientras que los generadores permiten controlar flujos asíncronos
más específicos.

¿Qué son callbacks y promesas en JavaScript?
Los callbacks son funciones que ejecutamos una vez finalizado determinado proceso asíncrono. Aunque útiles, las promesas se han vuelto preferidas por su
claridad y facilidad de implementación en Node.js. Una promesa representa un valor que tendremos disponible en el futuro, bien sea un resultado exitoso o un error.

Para profundizar en promesas, puedes consultar la documentación de Mozilla Developer Network, considerada una referencia completa sobre JavaScript.

¿Cómo utilizar Promise.all para procesos paralelos?
Promise.all permite ejecutar varios procesos asíncronos en paralelo, optimizando el potencial de Node.js. Implementar un ejemplo sencillo aclara su funcionamiento:

Crear tareas ficticias usando setTimeout.
const tareaUno = new Promise(resolve => setTimeout(() => resolve('Tarea Uno completada'), 1000));
const tareaDos = new Promise(resolve => setTimeout(() => resolve('Tarea Dos completada'), 1500));
const tareaTres = new Promise(resolve => setTimeout(() => resolve('Tarea Tres completada'), 2000));

Promise.all([tareaUno, tareaDos, tareaTres])
  .then(resultados => console.log(resultados))
  .catch(error => console.error(error));
Este ejemplo muestra cómo gestionar múltiples tareas sin bloquear el Event Loop, incrementando la performance de nuestras aplicaciones.

¿Qué son generadores y cuándo usarlos?
Los generadores en JavaScript (function*) permiten gestionar tareas asíncronas con un flujo claramente definido utilizando la palabra clave yield.
Son especialmente útiles al hacer iteradores infinitos o manejar procesos secuenciales más controlados.

Ejemplo práctico para generar números Fibonacci:

function* fibonacci() {
  let current = 0, next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const generadorFibonacci = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(generadorFibonacci.next().value);
}

// Continuar generando más allá del ciclo
console.log('Siguiente número:', generadorFibonacci.next().value);
console.log('Otro más:', generadorFibonacci.next().value);
Este enfoque ayuda a mantener el Event Loop libre al ejecutar procesos iterativos complejos.

¿Tienes alguna experiencia usando estas herramientas? Comenta cómo ha sido tu aplicación práctica de promesas y generadores en Node.js.