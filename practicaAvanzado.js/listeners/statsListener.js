const notifier = require ('../observer/notifier');

function logStats(user){
    console.log ('Logging stats...', user);
}

notifier.on('userRegistered', logStats)

module.exports = logStats;