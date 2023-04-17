// Realice un programa donde un personaje abra 10 cofres, los cofres pueden contener: 10 de oro, 2 pociones de vida, nada.

// a. Indique el oro final recolectado

// b. Indique cuantas pociones de Vida obtuvo

// c. Indique cuantos cofres vacíos hubo

// d. Cada vez que abre un cofre indique qué saco

let sumaOro = 0
let sumaPociones = 0
let cofresVacios = 0

for(i = 1; i <= 10; i++) {
      let numeroAleatorio = Math.round(Math.random() * 10);
      if(numeroAleatorio == 10) {
            alert(`Sacó 10 de oro en su cofre número ${i}`)
            sumaOro = sumaOro + numeroAleatorio  
      } else if(numeroAleatorio == 2) {
            alert(`Acaba de obtener 2 pociones de vida en su cofre número ${i}`)
            sumaPociones = sumaPociones + numeroAleatorio
      } else {
            alert(`En el cofre número ${i} está vacio`)
            cofresVacios++
      } 
}

document.write(
  `<h2> Se abrieron 10 cofres, los cuales se recolectó ${sumaOro} de Oro, ${sumaPociones} pociones de vida. Y en total fueron ${cofresVacios} cofres vacios</h2>`
);