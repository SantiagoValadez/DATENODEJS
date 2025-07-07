const dateFotmatter = require('datenodejs');

console.log('Timestamp:',dateFotmatter.getTimestamp());
console.log('Fecha en Español:', dateFotmatter.getLongTime('es-ES'));
console.log('Fecha en Inglés:', dateFotmatter.getLongTime('en-US'));

