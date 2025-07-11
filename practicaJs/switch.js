let expresion = "toyota";
// Uso de switch con su correcta sitaxis
// Es similar a hacer una comparaciones con los operadores === en cada uno de los casosnod
switch (expresion){
    case "nissan":
        //caso a ejecutar
        console.log("Su valor es de $15,000 dolares");
        break;
    case "ford":
        //caso a ejecutar
        console.log("Su valor es de 17,000 dolares");
        break;
    case "volkswagen":
        //caso a ejecutar
        console.log("Su valor es de $20,000 dolares");
        break;
    default:
        console.log(`No contamos con ese produto  ${expresion}` );// Caso por defecto
        break;
}