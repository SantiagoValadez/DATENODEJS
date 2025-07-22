Resumen

Comprender el Event Loop en Node.js es crucial para los desarrolladores avanzados. Aunque se suele decir que JavaScript es single thread, gracias al Event Loop
esta afirmación no es del todo cierta. El Event Loop permite delegar tareas al sistema operativo, gestionando eficientemente procesos asíncronos.

¿Qué es el Event Loop en Node.js y cómo funciona?
El Event Loop es un mecanismo que permite gestionar tareas de forma asíncrona mediante la delegación al kernel del sistema operativo. Es importante conocer
en detalle sus seis fases principales para optimizar la programación en Node.js:

¿Qué sucede en la fase timers del Event Loop?
Durante esta fase inicial se ejecutan las funciones programadas con setTimeout y setInterval. Sin embargo, el tiempo especificado no es exacto, depende de la
carga del Event Loop:

Verifica si el tiempo de ejecución para esos eventos pasó.
Ejecuta las funciones en el momento en que detecta la expiración, sin importar la exactitud del tiempo inicialmente definido.
¿Cuál es la importancia de los pending callbacks?
Esta fase se comunica directamente con el kernel para chequear qué tareas han terminado a nivel del sistema operativo:

Verifica operaciones completadas como lectura de archivos o procesos en red.
Encola callbacks para su ejecución en fases posteriores.
¿De qué trata la fase idle o prepare?
Esta etapa es gestionada internamente por Node.js, sin intervención directa del programador:

Es el estado de espera cuando no hay tareas inmediatas.
Su gestión interna hace que sea transparente para el desarrollador.
¿Qué rol cumple la fase poll?
Considerada la fase más crítica, ejecuta los callbacks previamente encolados:

Ejecuta código síncrono como operaciones con strings.
Gestiona colas de callbacks y recibe nuevas instrucciones de ejecución asíncrona.
Decide qué tareas bloquearán temporalmente la ejecución.
¿Cómo funciona la fase check en el Event Loop?
Aquí ocurre la ejecución de funciones programadas específicamente con setImmediate. Esto permite controlar la ejecución del código inmediatamente
después de la fase poll, cuando sea necesario hacerlo.

¿Cuál es la función de la fase close callbacks?
Ejecuta los callbacks relacionados con eventos de cierre:

Incluye eventos asociados a socket o stream cerrados.
Es la última etapa antes de volver a iniciar el ciclo nuevamente desde la fase timers.
¿Qué es el Process Next Tick y cómo afecta al Event Loop?
Process Next Tick permite insertar microtareas fuera del ciclo convencional del Event Loop:

Ofrece control adicional sobre la ejecución asincrónica.
Sin embargo, su abuso puede bloquear tareas esenciales del Event Loop, provocando problemas de rendimiento.
