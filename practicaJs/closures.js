// funcion que tiene acceso a variables de un ambito externo, incluso depsues de que es funcion haya sterminado de ejecutarse.
// Ambito lexico: cada vez que se declara una funcion, crea su propio ambito lexico, y puede acceder a las variables dentro
// del ambito y a las variables en ambito superiores

// function outerFunction() {
//     let outerVariable = 'I am from the outer function';

//     function innerFunction() {
//         console.log(outerVariable); // Accede a la variable del ámbito externo
//     }
//     return innerFunction; // Devuelve la función interna
// }

// const outerFunction = closureExample(); // Llama a la función externa, que devuelve la función interna


// function createCounter (){
//     let count = 0;

//     return function (){
//         count ++
//         console.log (count)
//     }
// }

// const counterA = createCounter ()
// counterA(); // Imprime 1
// counterA(); // Imprime 2
// const counterB = createCounter ()
// counterB(); // Imprime 1

// function outer (){
//     let message = "Hello"

//     function inner (name) {
//         console.log(message + name )
//     }
//     return inner; // Devuelve la función interna
// }

// const closureA = outer(); // Llama a la función externa, que devuelve la función interna
// const closureA = outer(); // Llama a la función externa, que devuelve la función interna

// closureA ("Alicia")
// closureA ("Bob")



// Otro ejemplo de closure con un contador

// function crearContador() {
//     let contador = 0;
//     return function () {
//       contador++;
//       return contador;
//     };
//   }
  
//   const contar = crearContador();// Aqui contador es un closure que mantiene acceso a la variable contador, auque la varible crear contador ya se haya ejecutado.
//   console.log(contar()); // 1
//   console.log(contar()); // 2


  // Ejercicios con closures #1©
function crearContador (){
    let contador = 0; // Variable privada del contador
    return function () {
        contador++; // Incrementa el contador
        return contador; // Devuelve el valor actual del contador
    }
}

  const contador1 = crearContador();
  console.log(contador1());//1
  console.log(contador1());//2
  console.log(contador1());//3
  console.log(contador1());//4
  console.log(contador1());//5

  

  const contador2 = crearContador();
  console.log(contador2());//1
  console.log(contador2());//2
  console.log(contador2());//3


// Ejercicios con closures #2©
function crearAlmacen (){
    const almacen = {
        // Objeto para almacenar los datos
        datos: {},
        // Método para guardar un valor en el almacén
        guardar: function (claveValor) {
            const [clave, valor] = claveValor.split(',').map(item => item.trim());
            this.datos[clave] = valor; // Almacena el valor asociado a la clave
        },
        // Método para obtener un valor del almacén
        obtener: function (clave) {
            return this.datos[clave] || `No hay ${clave} guardada`; // Retorna el valor o un mensaje si no existe
        }   
    };
    return almacen; // Retorna el objeto almacen
}

const miAlmacen = crearAlmacen ();
miAlmacen.guardar('fruta, manzana');
console.log (miAlmacen.obtener('fruta')); // Imprime 'manzana'
console.log (miAlmacen.obtener('verdura')); // Imprime 'No hay verdura guardada'

  


