 const os = require ('os');

 function showSystemInfo(){
    console.log(`Sistema Operativo: ${os.type()} `);
    console.log(`Plataforma: ${os.platafor}`);
    console.log(`Arquitectura: ${os.arch()}`);

 }
 showSystemInfo()