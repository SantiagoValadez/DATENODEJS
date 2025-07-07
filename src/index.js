function getTimestamp() {
  return Date.now();
}

function getLongTime(Locale ='es-ES') {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
   return new Date().toLocaleString(Locale, options);
}

module.exports = {
    getTimestamp,
    getLongTime
    };