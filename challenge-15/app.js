// 1- Realizar programa donde el usuario introduce 2 números y el ordenador responde sacando por pantalla la resta de ambos números y también su multiplicación.

let firstNumber = parseInt(prompt("Introduce un número"))
let secondNumber = parseInt(prompt("Introduce otro número"))

let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber

document.write(`La resta de ambos números es ${subtraction} <br>`)
document.write(`El producto de ambos números es ${multiplication} <br>`)

// 2- El usuario ingresa nombre y apellido, debemos verificar si los datos ingresados contienen la letra ('a' y 'm'). Mostrar x consola la respuesta (si contiene o no)

let username = prompt("Ingrese su nombre")
let lastname = prompt("Ingrese su apellido")

console.log(`el usuario tiene la letra a en su nombre: ${username.includes("a")} y la letra m: ${username.includes("m")}`)
console.log(`el usuario tiene la letra a en su apellido: ${lastname.includes("a")} y la letra m: ${lastname.includes("m")}`)

// 3- Crear una variable y asignarle el sig. valor : (' Pablito-clavo-un-clavito') investigar a través de que método podemos quitar los guiones y reemplazar por espacios.

let carpenter = " Pablito-clavo-un-clavito"

console.warn(`${carpenter.split("-").join(" ").trim()}`);