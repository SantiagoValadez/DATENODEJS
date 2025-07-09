console.log('Hora actual:', new Date().toLocaleTimeString());

const timeOut = setTimeout(() => {
  console.log('Este mensaje se muestra después de 2 segundos');
  console.log('Hora actual:', new Date().toLocaleTimeString());
}, 2000);

setImmediate(() => {
    console.log('Este mensaje aparece en la proxima interaccion del bucle');
    console.log('Hora actual:', new Date().toLocaleTimeString());
    });

 const IntervalId = setInterval(() => {
    console.log('Este mensaje se muestra cada 3 segundos');
}, 3000);

setTimeout(() => {
    console.log('Cancela el intervalo despues de 10 segundos');
    clearInterval(IntervalId);
}, 10000);

const timeOutId = setTimeout(() => {
    console.log('Este mensaje no se mostrará porque se cancela');
},10000);

clearTimeout(timeOutId);

console.log('Hora actual:', new Date().toLocaleTimeString());