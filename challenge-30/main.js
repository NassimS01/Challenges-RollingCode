//! Armar un piedra papel o tijera

// Le pedimos al usuario que elija entre piedra, papel o tijera
let select = prompt("Elige: Piedra, Papel o Tijera").toLocaleLowerCase()
// Array con las tres jugadas
let plays = ["piedra", "papel", "tijera"];

// Funcion que ejecuta el juego
const piedraPapelOTijera = () => {
// Este es lo que elegirá la computadora, que recorre el array mediante un número random.
let playComputer = plays[Math.floor(Math.random() * plays.length)];
// Bucle para que vuelva a pedir la jugada si el usuario eligió algo erroneo
while(plays.indexOf(select) === -1) {
alert("Jugada no válida, vuelve a intentarlo")
select = prompt("Elige: Piedra, Papel o Tijera").toLocaleLowerCase();
}
// Condición que da como resultado un empate
if(select === playComputer) {
      alert("Empate")
// Condición que elige ganador
} else if(select === "piedra" && playComputer === "tijera" ||
      select === "papel" && playComputer === "piedra" ||
      select === "tijera" && playComputer === "papel") {
      alert("Ganaste")
// Y fin del condicional que dice si el usuario ganó o no
} else {
      alert("Perdiste")
}
}

piedraPapelOTijera()