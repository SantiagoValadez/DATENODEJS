Resumen

El patrón observer es una técnica clave en la programación de Node.js que permite construir aplicaciones basadas en eventos. Utilizando el componente
Event Emitter, puedes emitir y escuchar eventos, logrando así una arquitectura orientada a eventos más eficiente, escalable y mantenible. Vamos a explorar 
cómo implementar este patrón a través de un ejemplo práctico: un notificador de registro de usuarios.

¿Qué es el patrón Observer y cómo funciona en Node.js?
El patrón observer consiste en dos partes principales: emisores (emitters) y oyentes (listeners). En Node.js, la clase Event Emitter del Core facilita implementar
este patrón siguiendo estos dos simples pasos:

Emitir eventos: lanzar acciones específicas indicando que algo ocurrió dentro del sistema.
Escuchar eventos: escuchar y reaccionar cuando esos eventos específicos se emiten.
¿Cómo crear un notificador de usuarios con Event Emitter?
Para comenzar a usar este patrón, crea primero un archivo notifier.js con la siguiente estructura básica:

const { EventEmitter } = require('node:events');

class UserNotifier extends EventEmitter {}

const notifier = new UserNotifier();
module.exports = notifier;
Esta clase UserNotifier extiende al objeto EventEmitter, obteniendo automáticamente las funcionalidades para emitir y escuchar eventos.

¿Cómo emitir un evento al registrar usuarios?
Crea userRegistration.js para emitir eventos cada vez que un usuario se registre:

const notifier = require('./notifier');

function registerUser(user) {
  console.log('Registrando usuario...', user);
  notifier.emit('userRegister', user);
  return user;
}

module.exports = registerUser;
Aquí la función registerUser es responsable de lanzar el evento userRegister con el objeto de usuario.

¿Cómo escuchar eventos en diferentes partes de la aplicación?
Para escuchar los eventos emitidos, implementa listeners. Por ejemplo, crea dos listeners: un emailListener.js que simula un envío de correo, y otro
statsListener.js que registra las estadísticas:

Listener para envío de emails:
const notifier = require('../notifier');

notifier.on('userRegister', (user) => {
  console.log(`Enviando email a ${user.email}...`);
});
Listener para estadísticas:
const notifier = require('../notifier');

notifier.on('userRegister', (user) => {
  console.log(`Actualizando estadísticas para ${user.name}`);
});
Al importar estos módulos en un archivo central index.js, los listeners automáticamente estarán atentos:

require('./listeners/emailListener');
require('./listeners/statsListener');

const registerUser = require('./userRegistration');

registerUser({name: 'Usuario Uno', email: 'usuario.uno@example.com'});
registerUser({name: 'Usuario Dos', email: 'usuario.dos@example.com'});
Cuando se ejecute este archivo con:

node index
El resultado mostrará cómo los eventos se emiten y son escuchados, asegurando una comunicación efectiva dentro de tu aplicación.

¿Qué recomendaciones de seguridad seguir al requerir módulos en Node.js?
Cuando importes módulos básicos de Node.js, utiliza siempre esta anotación segura:

const { EventEmitter } = require('node:events');
Esto asegura que importas módulos internos del Core nativo de Node.js, previniendo ataques maliciosos a través de paquetes modificados en NPM.

¿Cómo continuar practicando con Event Emitters?
Para fortalecer tu aprendizaje en event-driven architecture, intenta:

Crear otro tipo de evento, por ejemplo, la creación de un post por usuario.
Extiende las funciones para emitir y escuchar el evento.
Practica añadiendo más listeners que reaccionen adecuadamente a dicho evento.
