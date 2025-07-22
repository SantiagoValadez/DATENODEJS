Los streams manejan los datos por partes (chunks), ideales para archivos grandes, redes, o cualquier flujo continuo de información.

-------------------------------------------------------------------------------------

Algunas ocasiones frecuentes en las que intervienen los streams son:

- Lectura y escritura de archivos.
- Manejo de peticiones HTTP.

-------------------------------------------------------------------------------------

Existen cuatro tipos esenciales de streams en Node.js:

Readable: solamente ofrece lectura.
Writable: exclusivamente escritura.
Duplex: permite tanto lectura como escritura.
Transform: permite recibir datos, procesarlos y transformarlos en un nuevo flujo.