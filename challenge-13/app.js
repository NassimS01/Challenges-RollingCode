//! Variables con strings para mostrar en HTML

let saludo = "hola"
let nombre = prompt("Ingrese su nombre")

document.write(`${saludo} ${nombre}`)


//! Ejercicios de las fotos
// 3 variables con distintos números
let primerNumero = 5;
let segundoNumero = 10;
let tercerNumero = 7;

// Se crearon operaciones que utilizan primer y segundo Numero
let suma = primerNumero + segundoNumero;
let resta = primerNumero - segundoNumero;
let division = primerNumero / segundoNumero;
let producto = primerNumero * segundoNumero;

// Mostramos las operaciones realizadas anteriormente
console.log(suma);
console.log(resta);
console.log(division);

// Creamos un condicional para mostrar si es par o impar
let siNoImpar = segundoNumero % 2 == 1 ? "es impar" : "Es par";
console.log(siNoImpar);

// Creamos otras nuevas operaciones que utilizan el resultado de las operaciones anteriores y el tercerNumero
let nuevaSuma = suma + tercerNumero;
let nuevaResta = resta - tercerNumero;
let nuevoProducto = producto * tercerNumero;

// Mostramos las nuevas operaciones
console.log(nuevaSuma);
console.log(nuevaResta);
console.log(nuevoProducto);
