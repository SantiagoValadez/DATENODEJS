const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });//La palabra reservada "res" representa la respuesta que se le enviara al cliente. 
    res.end('Hola, este es un servidor HTTP simple en Node.js\n');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor escuchando en http://localhost:3000');
} );//El servidor escuchara en el puerto 3000, si se desea cambiar el puerto se puede cambiar el numero 3000 por el que se desee.