const crypto = require('crypto');

const text = 'Hola, este es un texto de ejemplo para encriptar';

const hash = crypto.createHash('sha256').update(text).digest('hex');
console.log('Texto original:', text);
console.log(`Hash SHA-256: ${hash}`);