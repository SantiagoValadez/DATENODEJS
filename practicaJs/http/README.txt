Resumen
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️<----------------- UTILIZANDO EL METODO GET ------------------------------->⚠️⚠️⚠️⚠️⚠️⚠️⚠️
¿Cómo hacer peticiones HTTP escalables en JavaScript?
Las peticiones HTTP son fundamentales para la interacción con servidores y APIs, un proceso esencial en la creación de aplicaciones web.
Implementar estas peticiones de manera eficiente puede marcar una gran diferencia en el rendimiento general de una aplicación. 
Aquí aprenderás a estructurar un código de JavaScript que permita realizar peticiones como GET, POST y DELETE de forma escalable.

¿Qué estructura necesita una función para realizar peticiones HTTP?
Para gestionar las peticiones HTTP de manera centralizada, utilizaremos la función sendHttpRequest. Esta función se encargará de recibir el método HTTP, la URL y
el tipo de datos que se enviarán en la petición.

function sendHttpRequest(method, url, data) {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json());
}
¿Cómo utilizar fetchPost para obtener datos?
La función fetchPost es la encargada de hacer uso de sendHttpRequest para realizar una petición GET que recuperará posts de una URL específica.

async function fetchPost() {
    const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
    console.log(responseData);
}

// --------> ¿Cómo imprimir y manipular datos en el DOM? <-----------
Una vez que se obtiene la respuesta del servidor, es crucial mostrar esos datos en la interfaz. Para ello, se utiliza la manipulación del DOM en JavaScript.

const listElement = document.getElementById('post-list');

function renderPosts(posts) {
    for (const post of posts) {
        const postElement = document.createElement('article');
        postElement.className = 'post';

        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        listElement.appendChild(postElement);
    }
}

// Llamar a fetchPost y renderizar los posts en el DOM.
fetchPost().then(responseData => {
    renderPosts(responseData);
});

// --------> Termina explicación de como manipular el DOM <----------- 

¿Cómo interactuar con botones para cargar contenido?
Para completar la interacción, necesitamos garantizar que la función fetchPost se ejecute al hacer clic en un botón específico.

const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', fetchPost);
Por medio de este proceso, puedes cargar datos desde un servidor y mostrarlos directamente en tu aplicación, manteniendo tus peticiones HTTP organizadas
y escalables. A través de la práctica continua, dominarás la manipulación del DOM, el uso del API Fetch y el manejo de promesas, habilidades esenciales para
 cualquier desarrollador web moderno. ¡Sigue avanzando y mejorando tus habilidades!



-----------> EJEMPLO PRACTICO DE LA ESTRUCTURA DE UN PROTOCOLO HTTP PARA CONSEGUIR ALGUN DATO DEL SEVIDOR <--------------

En este ejemplo cual es body, encabezado y la linea de inicio ?

POST /login HTTP/1.1                <--------- Esta se considera como la linea de inicio. (con metodo POST/Login es laa ruta a la que hace solicitud/http1.1 es la versión del protocolo)

Host: ejemplo.com                   <--------- Aqui comienza el encabezado. (Host indica el dominio)
Content-Type: application/json      <--------- Content type. (Especifica que el formato que se esta usando es Json)
Content-Length: 48                  <--------- Content lenght. (Indica cuantos bytes tiene el cuerpo)

{
  "usuario": "santiago",            <-------- Aqui comienza el body (Este es el contenido que se envia al servidor, por ejemplo para iniciar sesión).
  "password": "1234"
}

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️<----------------- UTILIZANDO EL METODO POST ------------------------------->⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️



¿Cómo enviar información desde un formulario web sin refrescar la página?
Enviar datos de un formulario web sin que la página se recargue es un desafío común en el desarrollo front-end. Aquí exploramos cómo lograrlo utilizando JavaScript
 para manejar eventos del formulario, estructurar datos y enviarlos al servidor. ¡Acompáñame y lo descubriremos juntos!

¿Cómo prevenir el refresco de página en un formulario?
Un problema común al enviar formularios es que la página se actualiza, perdiendo datos temporales o interrumpiendo experiencia del usuario. Para evitarlo:

Escuchar el evento submit: Utilizamos addEventListener en el formulario para capturar cuando el usuario intenta enviar datos.
Prevenir comportamiento predeterminado: Usamos event.preventDefault() para evitar que la página se recargue al enviar el formulario.
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Código para manejar el formulario
});
¿Cómo capturamos los datos del formulario?
Una vez que el refresco está prevenido, necesitamos acceder a los valores del formulario:

Obtener los elementos del formulario: Usamos querySelector para encontrar elementos por su ID.
Capturar datos ingresados: Accedemos a value del elemento para conseguir el texto ingresado por el usuario.
const title = event.currentTarget.querySelector('#title').value;
const content = event.currentTarget.querySelector('#content').value;
¿Cómo estructurar y enviar un objeto de datos al servidor?
Antes de enviar los datos, debemos estructurarlos en un objeto que el servidor espera recibir:

Crear un User ID aleatorio: Generamos un número para simular un identificador de usuario.
Estructurar los datos: Creamos un objeto con el título, contenido y userID.
Hacer la función async: Facilitamos la ejecución del fetch.
async function createPost(title, content) {
   const userID = Math.floor(Math.random() * 1000);
   const post = {
      title,
      body: content,
      userId: userID
   };

   // Hacer un request al servidor
}
¿Cómo enviamos un request POST con fetch?
La clave es usar fetch para enviar un request POST con el objeto de datos:

Especificar método y URL: Definimos el método POST y apuntamos a la URL correcta.
Incluir el cuerpo de la petición: Añadimos nuestro objeto de datos estructurado en JSON.
async function createPostRequest(post) {
    const response = await fetch('URL_DEL_SERVIDOR', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    
    if (response.ok) {
        console.log('Post creado exitosamente');
    } else {
        console.error('Error al crear el post');
    }
}
¿Cómo vinculamos el envío del formulario con nuestra función?
Finalmente, debemos ejecutar nuestra función de envío dentro del controlador de eventos del formulario.

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = event.currentTarget.querySelector('#title').value;
    const content = event.currentTarget.querySelector('#content').value;
    createPostRequest({ title, content });
});