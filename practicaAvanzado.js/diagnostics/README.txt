La herramienta Diagnostic Channels se presenta como una solución eficaz para lograr observabilidad en aplicaciones Node.js, permitiendo emitir y 
escuchar eventos importantes sin afectar el rendimiento general. Esta característica integrada funciona de manera similar al uso del EventEmitter, 
pero con optimizaciones específicas para reducir el impacto en la ejecución, mediante el uso de async local storage.

TAMBIEN SE LE CONOCE COMO INSTRUMENTACION A LA ACCION DE ESCUCHAR EVENTOS DENTRO DEL CODIGO Y OBTENER INFORMACION DEL PERFORMANCE.
------------------------------------------------------------------------------------------------------------------------------
¿Qué son los Diagnostic Channels y cómo funcionan?
Permiten crear canales de publicación/suscripcion, util para emitir eventos o mensajes internos sin afectar el rendimeinto si no hay escuchas.
Los Diagnostic Channels facilitan la creación de canales específicos dentro del entorno Node.js, optimizados para no impactar significativamente el ciclo
de eventos (event loop). Mediante un sencillo flujo de trabajo, puedes:

Crear un canal dedicado para tu aplicación.
Suscribirte en puntos estratégicos del código donde deseas recolectar eventos.
Publicar eventos importantes que son posteriormente escuchados o enviados a un sistema de monitoreo.
Esta metodología permite centralizar información vital para diagnosticar problemas sin afectar negativamente el rendimiento.

Es muy util cuando se quieres emitir eventos  internos de forma opcional (solo si alguien escucha) Es ideal para:
- middileware de monitoreo (loggin)
- Librerias que ofrecen ganchos internos
- Herramientas que no deben de impactar en el rendimiento.

------------------------------------------------------------------------------------------------------------------------------

¿Cómo implementar Diagnostic Channels en Node.js?
Implementar correctamente esta herramienta implica seguir ciertos pasos prácticos:

Importar Diagnostic Channel del core de Node.js:
const diagnostics = require('diagnostic_channel');
Crear un canal asignando un nombre específico:
const canal = diagnostics.channel('miApp');
Suscribirse al canal para escuchar eventos:
function onMessage(mensaje) {
    console.log(mensaje);
}

diagnostics.subscribe('miApp', onMessage);
Verificar si hay suscriptores antes de publicar:
if (canal.hasSubscribers) {
    canal.publish('evento importante');
}
Importante: Desuscribirse al finalizar, asegurando no dejar suscripciones activas innecesarias:
diagnostics.unsubscribe('miApp', onMessage);
Este flujo asegura eficiencia en el monitoreo del código sin implicar una sobrecarga significativa.

¿Por qué utilizar Diagnostic Channels para observabilidad?
La implementación de Diagnostic Channels es clave para la práctica conocida como instrumentación de código. Este proceso facilita la detención temprana
de errores o problemas potenciales integrándose a múltiples herramientas de monitoreo y gestión del rendimiento (APMs). Sus ventajas destacadas incluyen:

Rendimiento optimizado: no impacta negativamente al event loop de la aplicación.
Centralización de la información: recolecta datos útiles en ubicaciones accesibles.
Fácil integración con herramientas externas: permite vincular con sistemas externos dedicados a observabilidad.
Esta combinación facilita la rápida identificación y resolución de problemas, crucial para mantener la calidad y estabilidad en sistemas distribuidos y complejos.

¿Qué experiencia tienes utilizando herramientas de observabilidad en Node.js? Comparte tus experiencias en los comentarios.