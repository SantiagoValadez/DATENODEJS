Se utiliza ----worker thread y child process---- para tareas muy pesadas, con la intencion de optimizar el codigo en caso de que se este
enfrentando algun problema de rendimiento.


Resumen

La optimización del rendimiento en aplicaciones Node.js, especialmente ante tareas pesadas que bloquean la CPU, puede abordarse efectivamente con
mecanismos como worker threads y child processes. Incorporar estas técnicas ayuda a mantener la eficiencia del Event Loop y aumentar la capacidad
de atención a solicitudes simultáneas.

¿Qué son los bloques de tareas en Node.js y cómo reconocerlos?
Las tareas intensivas que exigen una alta capacidad de procesamiento pueden generar un bloqueo significativo del Event Loop en Node.js, resultando en
tiempos de respuesta lentos, como cuando se implementa una función recursiva para calcular Fibonacci. En un ejemplo práctico, calcular sintérminos
de la sucesión de Fibonacci directamente en el servidor Express provocó que la aplicación soportara solo 43 solicitudes en 20 segundos, revelando
así un problema importante de rendimiento.

¿Cómo usamos worker threads para optimizar tareas pesadas?
Para evitar el bloqueo del Event Loop, podemos utilizar el mecanismo de worker threads, una funcionalidad propia de Node.js que ejecuta tareas en hilos
independientes. La implementación consiste en:

Crear un archivo JS específico para el worker con la lógica pesada.
Instanciar este worker desde el servidor principal con la información necesaria.
Capturar resultados o errores generados por el worker para enviarlos a la solicitud original.
Con este método, el servidor logró atender 188 solicitudes durante el mismo intervalo de 20 segundos, una mejora considerable respecto al procesamiento sin workers.

¿Cuál es la diferencia al usar child processes?
Otra alternativa es emplear child processes mediante la función fork para ejecutar tareas pesadas en procesos completamente independientes.
El procedimiento involucra comunicación entre el proceso principal y el hijo mediante eventos y mensajes:

Se crea un nuevo archivo JS para el child process.
La aplicación principal envía información al child usando mensajes (send).
El child ejecuta la tarea y devuelve el resultado nuevamente a través de mensajes.
La prueba con esta técnica registra un total de 174 solicitudes atendidas en 20 segundos, mostrando que, aunque eficiente, el rendimiento es ligeramente
inferior respecto al uso de workers.

¿Qué mecanismo es más adecuado para optimizar lentitud en Node.js?
Cuando requieras ejecutar tareas pesadas específicamente en JavaScript y necesites un mejor desempeño evitando bloqueos, worker threads constituye
una opción más eficaz en términos de performance puro. Por otro lado, child processes tienen otras ventajas críticas:

Permiten la ejecución independiente de comandos en el sistema operativo.
Son útiles para lanzar aplicaciones internas necesarias para tu sistema.
Puedes elegir entre ambos mecanismos según los requerimientos puntuales de tu aplicación, equilibrando eficiencia en CPU con capacidades
adicionales que podrían ser necesarias en tu entorno de desarrollo.

¡Comparte tus experiencias en los comentarios y cuéntanos qué método te resulta más indicado en tus proyectos con Node.js!