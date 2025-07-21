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


function sendHTTPRequest(method, url, data) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET' && data) {
    options.body = JSON.stringify(data);
  }

  return fetch(url, options).then((response) => response.json());
}

const getButton = document.querySelector('#available-posts button');
const postsContainer = document.getElementById('posts-container');

async function fetchPosts() {
  try {
    const responseData = await sendHTTPRequest(
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
    console.error('Error al obtener los posts:', error);
  }
}

getButton.addEventListener('click', fetchPosts);
