const fs = require ('node:fs');

// console.log("Leyendo el primer archivo...");
// const text = fs.readFileSync('./archivo.txt', 'utf-8');// este es un metodo sincrónico
// console.log(text);

console.log("Leyendo el primer archivo...");
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // este es un metodo asincrónico. Usando un callback
    console.log(text);
})


console.log('----------------->Hacer cosas mientras lee los archivos...');
// console.log("Leyendo el segundo archivo...");
// const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');// este es un metodo sincrónico
// console.log(text2);

console.log("Leyendo el segundo archivo...");
fs.readFile('./archivo2.txt', 'utf-8', (err, text2) =>{// este es un metodo asincrónico. Usando un callback
    console.log(text2);2.2
});
