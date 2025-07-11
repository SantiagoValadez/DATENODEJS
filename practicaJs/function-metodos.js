//Ejemplo de estructura de una función en JavaScript


// 1.se inicia con la palabra reservada funcion
// 2.seguida del nombre de la función y paréntesis
// 3.dentro de los paréntesis se pueden definir parámetros
// 4.el cuerpo de la función se define entre llaves
// 5.se puede retornar un valor con la palabra reservada return
// 6.Ejemplo de una función que suma dos números
// 7.Se usa console.log para mostrar el resultado en la consola


// function suma (a,b){
//     return a + b;
// }

// console.log(suma(4,4));

// function calculateDiscountedPrice(price, discountPercentage){
//     const discount = (price * discountPercentage) / 100;
//     const discountedPrice = price - discount;
//     return discountedPrice;
// }

// const originalPrice = 100;
// const discountPercentage = 20;
// const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

// console.log(`Original price: $${originalPrice}`);
// console.log(`Discounted price: $${finalPrice}`);
// console.log(`Final price after discount: $${finalPrice}`);

// //Capacidades que tienen las funciones al igual que otros objetos.
// // Se le conoce a la accion de pasar funciones como argumentos con la palabra reservada ---------> "callback"
// // La manera en la que se declara un callback es la siguiente:

// function a (){}
// function b (a){}
// b(a)

// // como retornar funciones - funciones dentro de funciones 
// function a (){
//     function b () {}
//     return b
// }

// // Asignar funciones a variables ---> Expresion de funcion
// const a = function () {}

// // Tener propiedades y metodos
// function a (){}
// const obj = {}
// a.call (obj)

// //anidar funciones --> Nedter function
// function a (){
//     function b (){
//         function c () {

//         }
//         c()
//     }
//     b()
// }
// a()

// Almacenar funciones en objetos ---->  A ESTO ES A LO QUE SE LE CONOCE COMO METODO

const rocket = { 
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('🔥')
    }
}

rocket.launchMessage ()