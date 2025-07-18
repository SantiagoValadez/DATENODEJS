const notifier = require ('./notifier')

function registerUser (user){
    console.log ('Registering User...')
    // Register user
    notifier.emit('userRegistered',user)
    //implementar Registro

    return user
}

module.exports = registerUser;