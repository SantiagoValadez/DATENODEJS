Resumen

El manejo eficaz de datos binarios en Node.js gira alrededor de dos conceptos esenciales: buffers y streams. Comprender 
detalladamente estos elementos resulta vital para optimizar la memoria y el rendimiento de tus aplicaciones.

¿Qué es exactamente un buffer en Node.js?
Un buffer en Node.js representa objetos almacenados en memoria, específicamente datos binarios. No es más que una estructura que permite 
manejar estos datos eficientemente en la memoria del sistema.

Para entenderlo de manera sencilla, vamos a ver un ejemplo práctico en la terminal utilizando el REPL de Node:

const datos = Buffer.from('hola mundo');
console.log(datos);
Esta línea genera una representación en memoria de la cadena "hola mundo". Al ejecutar este código, Node muestra información binaria del texto, 
lo cual indica cómo está almacenado realmente:

<Buffer 68 6f 6c 61 20 6d 75 6e 64 6f>
Sin embargo, estos datos binarios pueden ser fácilmente convertidos nuevamente a texto con:

datos.toString(); // retorna: hola mundo
Este concepto cobra relevancia ya que todo flujo de datos en Node.js implica buffers.

¿Qué son los streams y por qué son importantes?
Los streams son fundamentales para gestionar eficientemente el flujo de datos de entrada y salida en Node.js, especialmente cuando trabajamos con
archivos grandes o peticiones web. Algunas ocasiones frecuentes en las que intervienen los streams son:

- Lectura y escritura de archivos.
- Manejo de peticiones HTTP.
Estos flujos son particularmente útiles cuando la cantidad de datos es desconocida o considerable, pues permiten procesar la información en partes
y no de manera completa, lo que mejora considerablemente el uso de recursos.

----------------------------------------------------------------------------------------------
Existen cuatro tipos esenciales de streams en Node.js:

Readable: solamente ofrece lectura.
Writable: exclusivamente escritura.
Duplex: permite tanto lectura como escritura.
Transform: permite recibir datos, procesarlos y transformarlos en un nuevo flujo.

----------------------------------------------------------------------------------------------

¿Cómo implementar streams para manejar archivos en Node.js?
Veamos cómo funciona esto con un ejemplo práctico utilizando streams para leer archivos eficientemente.

Lectura tradicional (sin streams)
Usar métodos tradicionales como readFileSync puede resultar problemático con archivos grandes, ya que consume mucha memoria y tiempo de procesamiento:

const fs = require('fs');
const data = fs.readFileSync('entrada.txt', 'utf-8');
console.log(data);
Este enfoque lee todo el archivo de una sola vez, lo cual puede no ser óptimo para archivos extensos.

Lectura usando streams (recomendado)
Emplear streams soluciona estos inconvenientes. El siguiente ejemplo muestra cómo leer el mismo archivo, pero en fragmentos:

const fs = require('fs');

const readable = fs.createReadStream('entrada.txt');

readable.on('data', (chunk) => {
  console.log(chunk.toString());
});

readable.on('end', () => {
  console.log('Terminó la lectura');
});
En el fragmento anterior, Node.js procesa el archivo en pequeños fragmentos (data) que luego podemos convertir a texto con el método toString(). 
Además, se detecta cuándo finaliza la lectura mediante el evento end.

Aplicando estos conceptos básicos, se logra un manejo mucho más eficiente del uso de memoria y tiempo de ejecución cuando trabajas con archivos o flujos grandes.

¿Tienes alguna experiencia usando buffers o streams en tus proyectos? ¡Comparte tus comentarios a continuación!