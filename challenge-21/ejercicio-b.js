let vidaPersonaje = parseInt(prompt("Ingrese la vida de su personaje"));

if (vidaPersonaje <= 0) {
  alert("Tu personaje está muerto");
} else if (vidaPersonaje >= 1 && vidaPersonaje <= 20) {
  alert("Corre!!");
} else if (vidaPersonaje >= 21 && vidaPersonaje <= 50) {
  alert("Modo defensivo");
} else if (vidaPersonaje >= 51 && vidaPersonaje <= 80) {
  alert("Modo moderado");
} else if (vidaPersonaje >= 81 && vidaPersonaje <= 100) {
  alert("Modo ofensivo");
} else {
  alert("Tu personaje tiene más de 100 hp");
}
