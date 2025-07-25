Resumen

La observabilidad en Node.js implica utilizar distintas técnicas de instrumentación para monitorear eventos e información de rendimiento.
Es fundamental entender que agregar herramientas de instrumentación puede reducir significativamente el rendimiento de tus aplicaciones en términos
de número de requests que pueden manejar por minuto.

¿Cómo afecta la instrumentación al rendimiento en Node.js?
Cuando añades código de observabilidad en tu aplicación Node.js, introduces operaciones adicionales que afectan directamente el loop de eventos.
Por ejemplo:

Una aplicación Node.js usando Fastify genera aproximadamente 63,000 requests por minuto sin instrumentación.
Utilizando N|Solid de NodeSource, este número disminuye a cerca de 60,453 requests.
Al activar la función de tracing para seguimiento HTTP en N|Solid, los requests bajan hasta 54,000.
Herramientas populares como Datadog reducen dramáticamente la cantidad hasta alcanzar alrededor de 15,000 requests por minuto.
Dynatrace presenta la reducción más severa en el rendimiento alcanzando solo 5,000 requests por minuto.
La consecuencia inmediata de esta disminución en performance es una mayor necesidad de infraestructura y servidores para satisfacer demandas elevadas.

¿Cuáles son las métricas esenciales en Node.js?
Las métricas para aplicaciones Node.js son variadas y específicas del entorno de JavaScript:

Métricas del sistema
Número de cores.
Modelo y arquitectura de la CPU.
Memoria total y libre.
Carga actual del sistema.
Tiempo activo del sistema (uptime).
Métricas específicas del proceso Node.js
Uso de memoria (RSS y Heap usage).
Operaciones bloqueadas de entrada y salida (Block input/output count).
Uso del CPU específico del proceso.
Métricas específicas de JavaScript y gestión de memoria
Debido a características propias, JavaScript presenta métricas particulares sobre administración de memoria:

Memoria total disponible y física.
Límite máximo de memoria del heap (normalmente 2GB, ajustable).
Uso actual y total asignado del heap.
Uso de memoria externa utilizada por módulos nativos (C++).
Métricas del Event Loop
Son cruciales para observar la eficiencia del loop de eventos en aplicaciones Node.js:

Promedio de retardo (delay).
Tiempo de descanso y número de iteraciones del loop de eventos.
Porcentaje de utilización del loop de eventos (Event Loop Utilization).
Métricas del Garbage Collector
Son útiles para monitorear automáticamente el manejo dinámico de memoria:

Frecuencia y duración de la recolección de basura (Garbage Collection).
Métricas generales aplicables en Node
Desempeño y duración de peticiones HTTP.
Operaciones de entrada y salida (archivos y red).
¿Qué herramientas utilizar para observabilidad local y en producción?
Existen dos contextos esenciales para medir aplicaciones Node.js: desarrollo local y producción.

Herramientas para observabilidad local
Clinic JS (Doctor): Lanza y encapsula procesos durante pruebas de carga, observando rendimiento de CPU y memoria.
0x Tool: Permite analizar específicamente el uso de CPU del programa ejecutado localmente, fácil de usar con NPX.
Ambas son herramientas exclusivamente para uso local, no recomendadas en entornos productivos.

Herramientas para observabilidad en producción
APMs: Proveen información en tiempo real del uso de recursos y desempeño general.
N|Solid: Herramienta de NodeSource completamente compatible con Node, que monitorea rendimiento tanto localmente como en entornos en producción
y está desarrollada para integrarse directamente al proceso Node.
Elegir adecuadamente entre estrategias y herramientas de observabilidad es fundamental dependiendo del contexto y tipo de medición requerido.
Recuerda analizar si tu necesidad es monitoreo constante en producción o una evaluación en fase de desarrollo.