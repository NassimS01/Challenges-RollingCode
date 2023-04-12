// Realizar un programa que dada la vida de un personaje, realice una acción. 

// * Si la vida está entre 0 y 20 que el personaje huya (escribir)
// * Si la vida está entre 21 y 50 que el personaje se ponga en modo defensivo
// * Si la vida está entre 51 y 80 que el personje se ponga en modo moderado
// * Si la vida está entre 81 y 100 que el personaje se ponga en modo ofensivo

//  a. Resolverlo sin conectores lógicos
//  b. Resolverlo con conectores lógicos (contemplar que tanto valores menores a cero y mayores a cien no pueden ser validados)

let vidaPersonaje = parseInt(prompt("Ingrese la vida de su personaje"))
if(vidaPersonaje <= 0) {
      alert("Tu personaje está muerto")
}
else if(vidaPersonaje <= 20) {
       alert("Corre!!")
} else if(vidaPersonaje <= 50) {
      alert("Modo defensivo")
} else if(vidaPersonaje <= 80) {
      alert("Modo moderado")
} else if(vidaPersonaje <= 100) {
      alert("Modo ofensivo")
} else {
      alert("Tu personaje tiene más de 100 hp")
}


