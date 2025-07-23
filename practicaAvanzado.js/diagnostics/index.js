// Uso de Diagnostic Channels en Node.js
// Este ejemplo muestra cómo crear un canal de diagnóstico, suscribirse a él y publicar mensajes
// para la observabilidad de la aplicación.
// Se utiliza el módulo 'diagnostics_channel' de Node.js para facilitar la comunicación entre diferentes
// partes de la aplicación sin necesidad de depender de eventos o callbacks tradicionales.
// Este enfoque es útil para la instrumentación de código, permitiendo una mejor monitorización y
// depuración de la aplicación en producción.

const diagnostics = require('node:diagnostics_channel'); 
// se importa el modulo nativo de node, llamado diagnostics_channel
// Este modulo permite crear canales de comunicación internos para enviar mensajes dentro de su app.
const channel = diagnostics.channel('mi-app')
// Se crea o se recupera un canal llamando mi-app
// Este canal sera usadno pra publicas mensajes mas adelante

function onMessage(message){
    // Hacer algo significativo con el mensaje
    console.log('Mensaje Recibido: ', message)
}
// Defines una funcion que sera llamda onMessages que sera el callback
// Se eejcuta automaticamente cuando se publique un mensaje en el canal 'mi-app'
// este caso simplemente imprime el mesaje

diagnostics.subscribe('mi-app', onMessage)
// Te subscribes al canal mi 'mi-app'
// Esto indica que cuando se publique un mensaje en este canal, se llamara onMessage.

if(channel.hasSubscribers){
    channel.publish('mi-app', 'hola')
}
// if (channel.hasSubscribers) {...}
// Antes de publicar, verifica si el canal 'mi-app' tiene almenos un suscriptor
// Esto es util para evitar trabajo innecesario si nadie esta escuchando
// Channnel.publish('mi-app', 'hola');
// Se publica el mensaje 'hola' en el canal 'mi-app'
// Como onMessage esta suscrito, se ejecuta e imprime.

diagnostics.unsubscribe('mi-app', onMessage)
// Se elimina la suscripcion al canal 'mi-app'
// A partir de aqui, ya no se ejcutara onMessage aunque se publiquen mas mensajes
