Resumen

¿Tu aplicación en Node.js consume cada vez más memoria sin motivo aparente? Puede que estés enfrentando un memory leak, uno de los problemas más comunes
 y críticos en el desarrollo con Node.js. Vamos a entender cómo identificar, diagnosticar y resolver este inconveniente de manera práctica y efectiva.

¿Qué es un memory leak en Node.js?
Un memory leak ocurre cuando un programa acumula progresivamente memoria sin liberarla, hasta alcanzar un límite crítico que genera una falla o un crash
 del proceso. Node.js, por defecto, dispone de hasta 2 gigabytes de memoria. Exceder este límite hará que tu aplicación se detenga inesperadamente
  debido a la falta de memoria disponible.

Este problema puede ser causado por:

Código defectuoso.
Malas prácticas de programación.
Referencias no liberadas adecuadamente.
¿Cómo ejecutar una prueba práctica para detectar memory leaks?
Usando Express y EventEmitter en Node.js, podemos crear escenarios realistas para detectar estos problemas:

Crear un nuevo proyecto con Express y crear un archivo index.js.
Definir un arreglo vacío (listeners) que almacenará funciones (listener).
Crear una clase (LeakyEmitter) que extienda de EventEmitter.
Conectar cada petición (request) a un listener que almacene la URL.
Monitorear periódicamente el uso de memoria con process.memoryUsage().
¿Cómo monitorear la memoria en tiempo real y analizar los resultados?
Al ejecutar pruebas con herramientas como autocannon para simular tráfico:

Observa continuamente el uso del heap (memoria ocupada por objetos).
Valida frecuentemente los resultados obtenidos del garbage collector, midiendo su efectividad.
Si el Heap no retorna al nivel inicial tras varias ejecuciones, significa que tu aplicación tiene un memory leak.

¿De qué manera identificar exactamente dónde ocurre el memory leak?
Utiliza herramientas avanzadas como Chrome Developer Tools para analizar a profundidad la memoria de tu proceso:

Realiza un heap snapshot con herramientas como InSolid.
Analiza este snapshot en la sección de memoria de Chrome Developer Tools.
Identifica objetos y referencias específicas que usan memoria excesivamente.
Una técnica útil es tomar múltiples snapshots y compararlos entre sí para detectar dónde y cómo crece más el uso de memoria.

¿Cómo solucionas el memory leak detectado?
El problema identificado en esta práctica ocurre porque la función listener mantiene una referencia al objeto request, lo que impide que el garbage
collector libere dicha memoria una vez terminada la petición. Para resolver este inconveniente práctico:

Evitar referenciar objetos de solicitudes (request) en variables o estructuras externas que persistan más allá del ciclo de vida del mismo.
Reemplazar referencias directas a objetos complejos por elementos primitivos (como strings) cuando sea posible.
Comparte en comentarios si te ha ocurrido este u otro memory leak y qué hiciste para resolverlo, ¡tu experiencia puede ayudar a otros desarrolladores!