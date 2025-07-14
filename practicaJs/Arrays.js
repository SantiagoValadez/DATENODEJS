// Practica de arrays

//COMO CREARLO ?
// ------> SE PUEDE USAR LA SIGUIENTE SINTAXIS : NEW ARRAY() O SIMPPLEMENTE CON ARRAY (). <------------

//  ------> Un arrays es un objeto que puede tener diferentes metodos <------------

const fruits = Array ('apple', 'banana', 'cherry', 'Orange', 'elderberry');
console.log(fruits);

const justOneNumber = Array(12)
console.log(justOneNumber);

const number = Array (1, 2, 3, 4, 5);
console.log(number);

const oneNumber = [4];
console.log(oneNumber);

const emtyArray = [];
console.log(emtyArray);

const sports = ['soccer', 'basketball', 'tennis', 'volleyball'];
console.log(sports);

const recipeIngredients = [
    'flour',
    true,
    2,
    {
        ingredients: 'milk', quantity: '1cup'
    },
    false
]
console.log(recipeIngredients);

// Accesing aarray elements
const firstFruit = fruits[0];
console.log(firstFruit); // Output: 'apple'

// lenght property
const numberOfFruits = fruits.length;

// UN arrays es un objeto que puede contener diferentes tipos de datos, incluyendo otros arrays, objetos, y valores primitivos.


// ---------->. ACERCA DE MUTABILIDAD E INMUTABILIDAD. .<------------
// los arrays son mutables, lo que significa que puedes cambiar sus elementos, agregar nuevos elementos o eliminar existentes sin crear un nuevo array.
// o simplemente se puede crear un nuevo array, lo que en este caso se considera inmutabilidad.

// Mutability
fruits.push('watermelon'); // Agrega un nuevo elemento al final del array
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'Orange', 'elderberry', 'watermelon']

// Inmutability
const newFruits = fruits.concat('kiwi'); // Crea un nuevo array con el elemento agregado
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'Orange', 'elderberry', 'watermelon']
console.log(newFruits); // Output: ['apple', 'banana', 'cherry', 'Orange', 'elderberry', 'watermelon', 'kiwi']

// Co0mando para identificar si un objeto es un array
console.log(Array.isArray(fruits)); // Output: true
// O tambien se puede hacer de la siguiente manera:
const isArray = Array.isArray(fruits);
console.log(isArray); // Output: true   

// Ejercicio practico para suma de todos los elementos de un array
const numbersArray = [1,2,3,4,5]
let sumar = 0;

for (let i = 0; i < numbersArray.length; i++){
    sumar += numbersArray[i]; // Sumar cada elemento del array
}
console.log(`La suma de todos los elementos del array es_ ${sumar}`); // Output: La suma de todos los elementos del array es_ 15

// -----------> METODOS QUE MODIFICAN EL ARRAY ORIGINAL <------------
// Con el metodo push () para agregar un elemento al final del array


// Push method

const countries = ['USA', 'Canada', 'Mexico'];
const newConuntries = countries.push('Brazil', 'Germany'); // Agrega 'Brazil' al final del array

console.log(countries); // Output: ['USA', 'Canada', 'Mexico', 'Brazil', 'Germany']
console.log(newConuntries); // Output: 5 (nuevo tamaño del array)

// Pop method
const removedCountry = countries.pop(); // Elimina el último elemento del array
console.log(countries); // Output: ['USA', 'Canada', 'Mexico', 'Brazil'] se puede notar que se elimino 'Germany'
console.log (removedCountry); // Output: 'Germany'

// ---------> Transformacion con MAP. <---------
// permite aplicar una funcion a cada elemento de un array y construir un nuevo array con los resultados.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map (number => numbers * numbers); // Eleva al cuadrado cada elemento del array

console.log(numbers); // Output: [1, 2, 3, 4, 5]    
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// ---------> Transformacion con ForEach. <---------
// Itera sobre cada elemento de un array y ejecuta una función proporcionada para cada elemento, sin crear un nuevo array.

const colors = ['red', 'green', 'blue'];
const iteratedColors = colors.forEach(color => console.log (color) ); // Imprime cada color en la consola

console.log(colors); // Output: ['red', 'green', 'blue']
console.log(iteratedColors); // Output: undefined (forEach no devuelve un nuevo array)

// Excersise Fahrenheit to celsius conversion 

const temperaturesInFahrenheit = [32, 68, 95, 104, 212];

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit -32))

console.log('Temperatures in Fahrenheit: ', temperaturesInFahrenheit);
console.log('Temperatures in Celsius: ', temperaturesInCelsius);

// Excersise Sum of elements in an Array
const newNumbers = [1,2,3,4,5];
let sum = 0;

newNumbers.forEach(number => {
    sum += number
})

console.log ('Array of numbers :', newNumbers);
console.log ('Sum of numbers: ', sum);


// ---------> Iteración en un arrays usando el metodo filter. <---------
// Crea un nuevo array con elementos que cumplen una condición dada por una función.

const numbersFilter = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbersFilter.filter(number => number % 2 === 0);

console.log('Contenido del array: ', numbersFilter);
console.log('Numeros pares: ', evenNumbers);


// sintetizando datos con la funcion reduce()

// Ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor

// Caso 1 usando la función reduce ()
const numberReduce = [1,2,3,4,5];
const sumReduce = numberReduce.reduce( (accumulator, currentValue)=> accumulator + currentValue, 0)

console.log(numberReduce);
console.log(sumReduce);

// Caso 2 usando la función reduce ()

const word = ['Daniela', 'Juan', 'Luis', 'Daniela', 'Sara', 'Daniela', 'Sebastian', 'Juan', 'Sara'];
const wordFrecuency = word.reduce ((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++
    }else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log ( wordFrecuency);


// ---------> Uso de metodos en un arrays usando la función find. <---------
// Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada y que cumple con alguna condición dentro de una función.

const multipleOf5 = [5,10,15,20];
const firstNumberGreaterThan10 = multipleOf5.find ( number => number > 10)

console.log ('El primer numero mayor a 10, es el numero: ', multipleOf5);
console.log (firstNumberGreaterThan10);

// ---------> Uso de metodos en un arrays usando la función findIndex. <---------
// Devuelve el indice del primer elemento de un array que satisface una condición proporcionada en forma de función. Si nop encuentra ningun elemento
// que cumpla la condición, devuelve -1

const randomNumber = [6,14,27,56,40];
const indexNumber = randomNumber.findIndex(number => number >50);

console.log ('El numero mayor a 50, se encuentra en la posición: ', randomNumber);
console.log (indexNumber);


// ---------> Uso de metodos en un arrays usando la función slice. <---------
// Crea una copia superficial (sahllow copy) de una porción del Array, especificada por indices de inicio y fin (fin no incluido).

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1,3));
console.log(animals.slice(-2));
console.log(animals.slice(2,-1));//cuandos se pasa un valor negativo, se comienza desde el final del arreglo
console.log(animals.slice());// devuelve todo el array


// ---------> Uso de metodos en un arrays usando la función spread. <---------
// haciendo la copia de un array, usando la funcion spread

//copiando un array
const orginalArray = [1,2,3,4,5];
const copyOfArray = [...orginalArray];//se colocan 3 puntos para señalar el uso del comando spread

console.log('Esta es la copia: ', orginalArray);
console.log('Este es el original: ', copyOfArray);


//combiando arrays

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];
const combinedArray = [...array1, ...array2 ,...array3];//se colocan 3 puntos para señalar el uso del comando spread

console.log('primer valor: ',array1);
console.log('segundo valor: ',array2);
console.log('tercer valor: ',array3);
console.log('valor de los array combinados: ',combinedArray);

// Creando arrays con elementos adicionales

const baseArray = [1,2,3];
const arrayWithAdditionalElements = [...baseArray, 4,5,6];

console.log ('este es un array base: ', baseArray);
console.log ('este es un array base con elementos adicionales: ', arrayWithAdditionalElements);

// Pasar parametros (Elementos a una fución)

function sum01 (a,b,c){
    return a +b + c;
}

const number03 = [1,2,3]
const resultado = sum01(...number03)// esta tomando la función indicada en la linea 233

console.log(resultado)




