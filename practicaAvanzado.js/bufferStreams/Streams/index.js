const fs = require ('node:fs')

const data = fs.readFileSync('entrada.txt', 'utf8')

console.log(data);