Resumen

// ## 📦 Proyecto: Cache con Express y Fibonacci

// Este proyecto es una pequeña API en Node.js que expone dos endpoints:

// - `/block`: calcula el número de Fibonacci de forma recursiva y **sin caché**, lo que puede ser lento para valores grandes.
// - `/cache`: utiliza un sistema de **caché en memoria con LRU (Least Recently Used)** para almacenar los resultados y acelerar futuras peticiones.

// ### Tecnologías utilizadas
// - `express`: framework web para Node.js
// - `lru-cache`: módulo de caché basado en el uso más reciente

// ### Objetivo
// Este ejemplo demuestra cómo mejorar el rendimiento de una función costosa (como Fibonacci recursivo) usando caché con expiración.
// Ideal para aprender sobre optimización de rutas en APIs con Node.js.


Mejorar el rendimiento de tu aplicación Node.js es posible con técnicas eficaces como el caching y métodos de escalamiento. Aprender cuándo aplicar 
cada enfoque te facilitará mantener óptimo el rendimiento y aprovechar al máximo los recursos de tu infraestructura.

¿Qué es caching y cómo implementarlo en Node.js?
El caching es una técnica clave para optimizar aplicaciones que realizan procesos intensivos. Consiste en almacenar resultados previamente 
calculados para servirlos rápidamente a futuros usuarios, evitando repetir tareas costosas:

Reduce significativamente el tiempo de respuesta y aumenta la capacidad de atender más solicitudes.
Puede implementarse fácilmente usando módulos como LRU cache.
¿Cómo se usa LRU cache en Node.js?
Para implementar caching con Node.js, necesitas instalar previamente el módulo LRU cache:

const LRU = require('lru-cache');

const cache = new LRU({
  max: 1000,
  ttl: 1000 * 60 * 60 // tiempo de vida en milisegundos, en este caso una hora
});
Debes considerar: 
- El número máximo de ítems que podrás guardar. 
- La duración del caché (time to live, TTL).

Implementar cache es sencillo: verificas primero si el resultado ya existe en el caché antes de calcularlo o procesarlo nuevamente.

Los resultados de esta técnica son notables. Mientras un proceso sin caché podría ejecutar pocos requests simultáneamente, con caché 
implementado es posible atender cantidades mucho mayores, aumentando significativamente la eficiencia del servidor.

¿Qué factores influyen en la decisión de escalar una aplicación Node.js?
Las métricas claves que inciden directamente en la decisión de escalar son: 
- Uso de CPU. 
- Utilización del Event Loop (Even Loop). 
- Uso de memoria (heap use).

¿Cuándo escalar horizontalmente?
La escalabilidad horizontal se aplica distribuyendo la carga del proceso entre varias instancias de Node.js, utilizando herramientas como: 
- Balanceadores de carga. 
- Reverse proxies, como NGINX.
- Sistemas de contenedores como Docker. 
- Administradores avanzados como Kubernetes.

Es recomendable optar por escalar de esta forma cuando el uso tanto de CPU como del Event Loop sean altos.

¿En qué situación escalar verticalmente?
Considera escalar verticalmente cuando la carga del Event Loop sea manejable, pero el consumo de CPU alto. Esto implica: 
- Agregar más potencia (core de CPU) a tu actual infraestructura. 
- Utilizar procesos como workers o child processes para distribuir la carga dentro de una misma máquina.

¿Cómo afecta la memoria la decisión de escalamiento?
Recuerda que el límite predeterminado del espacio del heap en Node.js es de dos gigabytes.
En aplicaciones con bajos requerimientos de memoria, puedes ejecutar múltiples procesos en una misma máquina con suficiente RAM disponible.
Cuando un proceso consume mucha memoria, lo ideal es aislar cada instancia para evitar sobrecargar los recursos.
Monitorear métricas como CPU usage, Even Loop utilization y heap use, junto al análisis del trabajo del garbage collector, es indispensable
para planificar un escalado efectivo acorde a las necesidades reales de tu aplicación.

No dudes en compartir experiencias con diferentes enfoques y discutir cuál adaptación puede funcionar mejor según tu contexto y requerimiento específico.
¡Anímate a comentar tu caso particular!