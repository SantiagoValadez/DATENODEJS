Resumen

Usar un CLI en un proyecto de Node.js permite automatizar tareas, mejorar la experiencia del desarrollador, facilitar la interacción desde
la terminal, e integrar fácilmente scripts reutilizables en flujos de trabajo o pipelines de CI/CD. Además, permite distribuir herramientas
globales, hacer scripts interactivos y mantener buenas prácticas de documentación y estructura.


------------------------------------------------------------------------------------------------------------------------------------

Este script es una herramienta de línea de comandos (CLI) desarrollada en Node.js. Al ejecutarse:

- Muestra la ruta del ejecutable de Node.js, del script, y los argumentos recibidos.
- Solicita al usuario que introduzca un número y lo imprime en consola.
- Maneja señales del sistema como SIGINT (`Ctrl+C`) o SIGTERM para cerrar correctamente la interfaz de entrada y finalizar el proceso de forma controlada.

Ideal como plantilla base para construir scripts CLI interactivos en Node.js.

--------------------------------------------------------------------------------------------------------------------------------------

Las aplicaciones de línea de comandos (CLI) están cobrando cada vez más importancia en el entorno de desarrollo, y Node.js facilita
 considerablemente su creación. Aprender a programar un CLI básico utilizando Node.js y sus herramientas esenciales optimizará las
  actividades cotidianas en la consola.

¿Qué es una aplicación CLI y para qué sirve?
Una aplicación CLI (Command Line Interface) es una herramienta ejecutable desde la terminal, ideal para tareas rápidas o repetitivas
 del desarrollador. Node.js no solo permite construir estas aplicaciones, sino que trae incorporado Node REPL, que simula una consola
  de JavaScript donde puedes probar rápidamente comandos y funciones.

Al ejecutar node en la terminal, se lanza una interfaz REPL que proporciona opciones tales como:

Ejecutar código JavaScript directamente.
Comandos para manipular archivos o código temporalmente.
Herramientas como break, clear, exit y más.
¿Cómo crear tu primera app CLI con Node.js?
Para empezar con una CLI básica, sigue estos pasos:

Crea una carpeta llamada CLI.
En esta carpeta, crea un archivo hello-cli.js.
Añade un comentario especial llamado Shibank al principio del archivo, indicando que será ejecutado con Node:
#!/usr/bin/env node
Este comentario especial orienta al sistema sobre cómo ejecutar el script.

Herramientas esenciales para la creación de CLIs en Node.js
Dos módulos fundamentales en Node.js para construir aplicaciones CLI son:

readline: permite obtener entradas desde la terminal.
process.argv: proporciona un arreglo con los argumentos con que se llamó al script.
Estos módulos son incluidos fácilmente en tu archivo de JavaScript:

const readline = require('readline');
const [nodeExecPath, scriptPath, ...args] = process.argv;
Cómo capturar y utilizar entradas por terminal
Utilizando readline, es posible realizar preguntas al usuario desde la CLI y capturar sus respuestas. Se configura creando
 una interfaz entre los streams de entrada y salida del proceso:

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa un número: ', numero => {
  console.log(`El número ingresado es: ${numero}`);
  rl.close();
  process.exit(0);
});
Este ejemplo muestra cómo se puede solicitar una entrada del usuario y manejarla adecuadamente.

Ejecución y permisos en sistemas operativos Unix
En sistemas operativos como Linux o Mac, es necesario asignar permisos de ejecución al archivo CLI:

chmod +x hello-cli.js
Luego, ejecuta el archivo directamente desde la terminal con:

./hello-cli.js
Si agregas argumentos, el script reconocerá y mostrará esas variables adicionales, por ejemplo:

./hello-cli.js parametro1=valor1 parametro2=valor2
¿Cómo trabajamos con señales para gestionar flujos?
Finalmente, las señales permiten responder a eventos como Ctrl+C. Escuchar estas señales en Node.js asegura un manejo
 de errores robusto en las aplicaciones CLI.

process.on('SIGINT', () => {
  console.log('Se recibió Ctrl+C.');
  process.exit(0);
});
Esta técnica permite controlar su aplicación CLI de manera fluida y eficaz.



// --------------> Anexos: <---------------

// #!/usr/bin/env node-- Se debe de usar al inicio del archivo para que el sistema operativo sepa que debe usar Node.js para ejecutar este script.
// chmod +x hello-cli.js Esto hace que el archivo sea ejecutable en sistemas Unix/Linux
// 1. Para ejecutar el script, usa el comando: node hello-cli.js