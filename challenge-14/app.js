// 1- A través de document.write concatena un saludo almacenado en 2 variables.
let saludo = "Hola";
let nombre = "Nassim";
document.write(`${saludo} ${nombre} <br>`);

// 2- Pedirle el nombre al usuario y devolver un msj con saludo en el HTML
let nombreUser = prompt("Escribe tu nombre");
document.write(`${saludo} ${nombreUser} <br>`);

// 3- (Introducir un número y devolver el doble del mismo num)
let num = parseInt(prompt("Ingrese un numero"));
document.write(`El doble del numero ${num} es: ${num * 2}`);

// 4- Recibir el apellido del usuario y mostrar por consola la ultima letra
let apellido = prompt("Ingrese su apellido");
console.log(apellido.trim().slice(0));
