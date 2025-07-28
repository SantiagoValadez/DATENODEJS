#!/usr/bin/env node
// shebang necesario para un cli. Le dice al sistema operativo que el script debe de ejecutarse utilizando node.js. Lo que permite que el aarchivo se ejecute
// directamente dese la terminal como un comando.

// importacion de lo modulos nativos de node
// readline: permite leer entradas del usuario desde la temrinal
// process argv: contien los argumentos con los que se ejecuto el script
const readline = require ('node:readline');
const {argv} = require ('node:process');
// Se hace destructuracion del array argv
// nodeExecPaht: es la ruta del ejecutable de node.js
// scriptpath: ruta del archivo.js que se esta ejecutando
// args: Todos los argumentos adicionales que el usuario paso al ejecutar el script
const [nodeExecPath, scriptPath, ...args] = argv; 


// Se imprimen en consola los datos anteriores: La ruta de Node, La ruta de script y lños argumentos que le paso el usuario.
console.log(`Ruta de node: ${nodeExecPath}`);
console.log(`Ruta del script: ${scriptPath}`);
console.log(`Argumentos: ${args.join(', ')}`);

// Se crea una interface del lectura para capturar los datos desde el teclado (stdin) y mostrarlos en cosnola (stdout)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question('Cual es el numero: ', (number) =>{ // Se hace una pregunta al usuario "Cual es el numero ?"
    console.log (`El numero es : ${number}`);// cuando el usuario responde se imprime el numero
    rl.close(); // se cierra la interface readline y se termina el proceso con process.exit()
    process.exit(0);
})

// Se define un siguiente arreglo con señales del sistema opertivo. Estas señales pueden usarse para interrumpir procesos. Por ejeplo con ctrl + C
const signals = ['SIGINT', 'SIGTERM', 'SIGURST1', 'SIGUSR2'];


// Se registra un listener para cada señal si el proceso percibe alguna de esas señales
// Se muestra un mensjae mostrando la señal recibida
// Se cierra readline (por si estaba esperando respuesta del usuario)
// se finaliza el proceso de fomra limpia
signals.forEach(signal => {
    process.on(signal, () => {
        console.log(`Recibido el signal: ${signal}`);
        rl.close()
        process.exit(0);
    });
});


// --------------> Anexos: <---------------

// #!/usr/bin/env node-- Se debe de usar al inicio del archivo para que el sistema operativo sepa que debe usar Node.js para ejecutar este script.
// chmod +x hello-cli.js Esto hace que el archivo sea ejecutable en sistemas Unix/Linux
// 1. Para ejecutar el script, usa el comando: node hello-cli.js