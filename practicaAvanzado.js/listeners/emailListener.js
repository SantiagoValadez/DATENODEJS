const notifier = require ('../observer/notifier')

function sendEmail (user){
    console.log(`Sending email to${user.emamil}`);
}

notifier.on('userRegistered', sendEmail);

module.exports = sendEmail;