const EventEmitter = require ('node:events') // se implementa el evento "EventEmitter"

class UserNotifier extends EventEmitter {} // se declara la clase "UserNotifier" la cual extiende herencia de "EventEmitter"

const notifier = new UserNotifier () // Hace una instancia de la clase "UserNotifier", la cual se llama "notifier"

module.exports = notifier // se exporta el objeto notifier para poder usarlo en otros archivos.