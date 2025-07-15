//Porgramación sincrona y asincrona en Js
// es otra forma de poder trbajar de forma asincrona(Es una forma mas legible de poder leer los pasos a comparacion de las promesas)
// fetch es una web api que nos regres una promesa

// uso de fetch (webPackage)
function fetchData(){
    fetch("https://swapi.info/api/")// fetch es la webpakage que se neceista para hacer una peticion a la api
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error));
}
// console.log(fetchData);
    
// Usando Async y await
// try y catch sirven para levar un control con las funciones asincronas
async function fetchData01(){
    try { // Es el codigo que tiene que pasar cuando las cosas funcionan
        let response = await fetch ("https://swapi.info/api/"); // await nos indica que esta esperando que una parte del codigo se resuelvan con la promesa
        let data = await response.json();
        console.log (data);
    } catch (error){
        console.log(error);
    }
}

fetchData();

// -------------> Async <----------------------------
// Se utiliza para declarar una fucnion como asincrona
// Una función asincrona siempre devuelve una promesa 
// dentro de una función async, puedes usar la palabra clave await

// ------------> await <-------------------------------
// Se utiliza unicamente dentro de una funcion async
// Pausa la ejecución de la funcion hasta que la promesa asociada se resuelva o rehace
// El valor resuelto de la promesa se asigna a la variable que esta al lado izquierdo de await


// ------------> Ventajas de usar async y await <-------------------------------
// codigo mas legible ya que hace que se parezca mas al codigo sincrono, lo cual mejora su legibilidad y mantenibilidad
// manejo de erros mas facil al utilizar try y catch
// Mejora del codigo asincrono

//Resumen 
// Async y await es una sintaxis que hace que el codigo asincrono sea mas facil de escribir y AudioListener. Transformandolo en un codigo similar al 
// asincrono, lo que mejorar su mantenibilidad y legibilidad.


// -----------> hacer mas de una petición, utilizando una promesa con asyc y await <----------------
// FOR AWAIT OF bucle que sirve para pasar peticiones

const urls = ["https://swapi.info/api/films",
    "https://swapi.info/api/people",
    "https://swapi.info/api/planets",
    "https://swapi.info/api/species",
    "https://swapi.info/api/vehicles",
    "https://swapi.info/api/starships"
];
async function fetchNewData() {
    try{
        for await ( let url of urls){
            let response = await fetch (url);
            let data = await response.json
            ();
            console.log(data);
        } 
        } catch (error){
            console.log(error)
    }
}

// ---------------------> FOR AWAIT <----------------------

// for await...of es una estructura de control en JavaScript utilizada para iterar sobre objetos iterables asíncronos. Permite procesar elementos de forma secuencial,
//  esperando la resolución de cada elemento antes de pasar al siguiente.

// for await...of es una herramienta poderosa para trabajar con datos asíncronos en JavaScript. Permite iterar sobre elementos de forma secuencial, 
// esperando la resolución de cada elemento antes de continuar, lo que simplifica el manejo de operaciones asíncronas en comparación con el uso de promesas y bucles 
// tradicionales.

// Diferencia con for...of:

// Mientras que for...of se utiliza para iterar sobre objetos iterables síncronos, for await...of está diseñado específicamente para manejar iterables asíncronos.

