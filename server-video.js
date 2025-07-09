const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/video') {
        const videoPath = path.join(__dirname, 'video.mp4');
        const stat = fs.statSync(videoPath);

        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': stat.size,
        });

        const readStream = fs.createReadStream(videoPath);
        let chunkCounter = 0;

        readStream.on('data', (chunk) => {
            chunkCounter++;
            console.log(`Enviando chunk ${chunkCounter}: size: ${chunk.length} bytes,
                 leidos y enviados al cliente`);
            res.write(chunk);
        });
        readStream.pipe(res);//conectar el flujo de lectura al flujo de respuesta
        }else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Video no encontrado');
        }
});

server.listen(3005,() => {
    console.log('Servidor escuchando en http://localhost:3005');
})
