const http = require ('http')

const server = http.createServer(function(request,response){
    response.writeHead(200, {'Content-type': 'text/html; charse=UTF-8'});

    response.end('Wake up Neo!!\n ')
}) ;

// Arrancamos el servidor
server.listen (1337, '127.0.0.1');
console.log('Servidor arrancando en 127.0.0.1:1337');

// Como se ejecuta?
// $ node index.js


// Con nodemon 
// $ npm install nodemon -g
// $nodemon