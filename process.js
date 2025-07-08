console.log(`ID del proceso (PID): ${process.pid}`);
console.log(`Versión de Node.js: ${process.version}`);
console.log(`Plataforma: ${process.platform}`);
console.log(`Directorio actual: ${process.cwd()}`);
console.log(`Memoria total: ${process.memoryUsage().heapTotal / (1024 * 1024)} MB`);   
console.log(`Memoria usada: ${process.memoryUsage().heapUsed / (1024 * 1024)} MB`);
console.log(`Número de argumentos: ${process.argv.length}`);
console.log(`Argumentos: ${process.argv.join(', ')}`);
console.log(`Ruta del ejecutable: ${process.execPath}`);
console.log(`ID del proceso padre: ${process.ppid}`);
console.log(`Entorno: ${JSON.stringify(process.env, null, 2)}`);
console.log(`Directorio de trabajo: ${process.cwd()}`);
console.log(`Tiempo de actividad: ${process.uptime()} segundos`);

console.log(`Versión de V8: ${process.versions.v8}`);
console.log(`Versión de OpenSSL: ${process.versions.openssl}`);
console.log(`Versión de Node.js: ${process.versions.node}`);
console.log(`Versión de npm: ${process.versions.npm}`);
console.log(`Versión de libuv: ${process.versions.libuv}`);

console.log(`Versión de zlib: ${process.versions.zlib}`);

console.log(`Versión de ICU: ${process.versions.icu}`);
console.log(`Versión de nghttp2: ${process.versions.nghttp2}`);
console.log(`Versión de brotli: ${process.versions.brotli}`);
console.log(`Versión de c-ares: ${process.versions.cares}`);
console.log(`Versión de modules: ${process.versions.modules}`);



