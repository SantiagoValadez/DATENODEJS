Resumen

Crear una Interfaz de Línea de Comando (CLI) con Node.js puede generar ciertos desafíos, especialmente relacionados con el manejo apropiado
 de las entradas y argumentos proporcionados por los usuarios. Una herramienta poderosa y sencilla que facilita ampliamente esta tarea es el
  módulo Minimist. Este módulo permite gestionar fácilmente diferentes tipos de entradas, incluyendo modificadores o flags y argumentos de
   línea de comando.

¿Qué problemas resuelve Minimist al crear un CLI?
Al desarrollar aplicaciones CLI, uno de los primeros desafíos es leer y manejar adecuadamente los argumentos proporcionados por el usuario.
 Entre las importantes consideraciones que debemos tener, destacan:

Identificar y tratar diferentes tipos de argumentos (por ejemplo, tipo string o boolean).
Establecer valores predeterminados para aquellos argumentos que puedan no pasarse explícitamente.
Definir alias que faciliten su uso abreviado en la línea de comandos.
¿Cómo configurar Minimist en un proyecto Node.js?
Para comenzar a utilizar Minimist, debemos seguir algunos pasos esenciales:

Crear un archivo específico para nuestro CLI, por ejemplo, NiceCLI.js.
Inicializar un nuevo proyecto Node.js con npm init para generar un archivo package.json.
Instalar Minimist como dependencia en nuestro proyecto:
npm install minimist
Esto nos permitirá gestionar todas las dependencias de forma organizada y eficiente.

¿Cómo declarar y utilizar argumentos y alias con Minimist?
Minimist nos proporciona una estructura sencilla para definir nuestros argumentos:

#!/usr/bin/env node

const minimist = require('minimist');

const args = minimist(process.argv.slice(2), {
  string: ['nombre', 'rol', 'compañía'],
  boolean: ['saludo'],
  default: { saludo: false },
  alias: { s: 'saludo', n: 'nombre', r: 'rol', c: 'compañía' }
});

console.log(args);
Algunas consideraciones clave sobre este fragmento son:

Los argumentos de línea de comando comienzan siempre a partir del tercer elemento en process.argv, ya que los dos primeros tienen información
 del ejecutable y el script.
Se especifica claramente el tipo del argumento (string o boolean).
Se establecen valores predeterminados utilizando la propiedad default.
Se facilitan alias cortos para simplificar el llamado desde la terminal.
¿Cómo utilizar correctamente los argumentos al ejecutar tu CLI?
Luego de configurar Minimist, puedes lanzar comandos claros y ordenados desde tu terminal. Ejemplos prácticos incluyen:

./NiceCLI.js --nombre "Adrián" --rol CTO -c NodeSource
Incluso el formato de los comandos es flexible y puede simplificarse gracias a los alias:

./NiceCLI.js -n Adrián -r CTO -c NodeSource
Minimist se encarga automáticamente de organizar y parsear estos comandos en un objeto fácil de usar.

¿Qué aprenderás al implementar Minimist en tu CLI?
Al trabajar con Minimist, aprenderás a generar una estructura inicial muy clara para tu CLI, estableciendo un sólido manejo de argumentos
 desde sus etapas tempranas. Esto contribuirá a que tus aplicaciones de línea de comandos sean fáciles de usar, flexibles y sólidas técnicamente.

Si ya has tenido alguna experiencia creando CLI o si tienes alguna consulta sobre Minimist, déjanos tu comentario, será genial conocer tus
 experiencias y opiniones.



---------------------------------------------------------------------------------------------------------------------------------



 Este script es una herramienta CLI en Node.js que utiliza la librería `minimist` para parsear argumentos desde la línea de comandos.

Permite pasar argumentos como `--nombre`, `--rol`, `--compania` y un booleano `--saludo` (o sus alias `-n`, `-r`, `-c`, `-s`). Si se recibe 
una señal del sistema como `SIGINT` (Ctrl+C), el script responde limpiamente y finaliza el proceso.

Ideal para crear herramientas interactivas o automatizadas que se ejecuten desde la terminal con configuraciones personalizadas.
