// Http

// h yper
// t ext
// t ransfer
// p rotocol


// -----------> ACCIONES CON HTTP <-----------
// get ------ obtener informacion
// post ------ tomar informacion y generar u post en el srevidor
// patch y put ------- actualizar la informacion que ya existe
// delete ------- desechar la informacion que ya no es requerida

// Ejercicio practico usando Http protocols

// function sendHTTPrequest (method,url,data){
//     return fetch (url, {
//         method: method,
//         body: JSON.stringify(data),
//         headers: {
//             'Content-type':'application/json',
//         },
//     }).then((response)=>{
//         return response.json();
//     });
// }

// async function fetchPosts() {
//     const responseData = await
//     sendHTTPrequest (
//         'GET',
//         'https://jsonplaceholder.typicode.com/posts'
//     );
//     console.log(responseData);
//     const listOfPosts = responseData;

// -----------> Esta seccion del codigo esta dedicada a la manipulacion del Dom <----------
    // const listElement = document.getElementById('post-list');

// function renderPosts(posts) {
    // for (const post of listOfPosts) {
    //     const postContainer = document.createElement('article');
    //     postContainer.id = post.id;
    //     postContainer.classList.add ('post-item');


    //     const title = document.createElement('h2');
    //     title.textContent = post.title;

    //     const body = document.createElement('p');
    //     body.textContent = post.body;

    //     const button = document.createElement('button');
    //     button.textContent = 'Delete Content';

    //     postContainer.append(title);
    //     postContainer.append(body);
    //     postContainer.append(button);

    //     listElements.append(postContainer);
    // }
// }


// Llamar a fetchPost y renderizar los posts en el DOM.
// fetchPost().then(responseData => {
//     renderPosts(responseData);
// });
// -----------> Aqui termina la seccion del codigo que esta dedicada a la manipulacion del Dom <----------

// fetchButton.addEventListener ('Click', fetchPosts);


function sendHTTPRequest(method, url, data) { // Esta función envía una solicitud HTTP al servidor y devuelve una promesa que se resuelve con los datos de la respuesta.  Hace peticiones HTTP de manera escalable y reutilizable.
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET' && data) { // method: El método HTTP a utilizar (GET, POST, etc.)
    options.body = JSON.stringify(data);
  }
  return fetch(url, options).then((response) => response.json()); // La función utiliza la API Fetch para realizar la solicitud y devuelve una promesa que se resuelve con los datos de la respuesta en formato JSON.
}

const getButton = document.querySelector('#available-posts button');
const postsContainer = document.getElementById('posts-container');

async function fetchPosts() { // pide los posts al servidor y los muestra en el DOM. (En pantalla).
  try {
    const responseData = await sendHTTPRequest(   // url: La URL a la que se envía la solicitud.
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );

    postsContainer.innerHTML = ''; // limpiar posts anteriores

    for (const post of responseData) {
      const postContainer = document.createElement('article');
      postContainer.id = post.id;
      postContainer.classList.add('post-item');

      const title = document.createElement('h2');
      title.textContent = post.title;

      const body = document.createElement('p');
      body.textContent = post.body;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete Content';
      deleteButton.addEventListener('click', () => {
        postContainer.remove();
      });

      postContainer.append(title, body, deleteButton);
      postsContainer.append(postContainer);
    }
  } catch (error) {
    console.error('Error al obtener los posts:', error); // Si la solicitud falla, se captura el error y se muestra en la consola. 
  }
}

getButton.addEventListener('click', fetchPosts); // dispara la acción de obtener los posts al hacer clic en el botón.


// async function createPost(title, content) { // Esta función crea un nuevo post en el servidor y lo muestra en el DOM.{
//     const userId = Math.random();
//     const post = {
//         title: title,
//         body: content,
//         userId: userId
//     };
//     sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
// }

// formToJSON.addEventListener('submit', (event) => {
//     event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional.
//     const title = event.target.title.value; // Obtiene el valor del campo de título del formulario.
//     const content = event.target.content.value; // Obtiene el valor del campo de contenido del formulario.
//     createPost(title, content); // Llama a la función para crear un nuevo post con los valores obtenidos.
//     event.target.reset(); // Limpia el formulario después de enviar los datos.
// });

// --- Captura el formulario y los inputs
const postForm = document.querySelector('#new-post form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// --- Manejador del evento submit
postForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const enteredTitle = titleInput.value;
  const enteredContent = contentInput.value;

  if (!enteredTitle.trim() || !enteredContent.trim()) {
    alert('Por favor completa ambos campos');
    return;
  }

  try {
    const newPost = {
      title: enteredTitle,
      body: enteredContent,
      userId: 1
    };

    const createdPost = await sendHTTPRequest(
      'POST',
      'https://jsonplaceholder.typicode.com/posts',
      newPost
    );

    console.log('Post creado:', createdPost);
    alert('¡Post enviado exitosamente!');

    // Limpiar campos
    titleInput.value = '';
    contentInput.value = '';

    // Recargar lista de posts
    fetchPosts();

  } catch (error) {
    console.error('Error al enviar el post:', error);
    alert('Ocurrió un error al enviar el post');
  }
});
