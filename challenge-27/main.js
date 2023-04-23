// En un juego de pelea un personaje utiliza un skill. La skill funciona de esta manera: 
// El contrincante recibirá 10 golpes cada uno de esos golpes proporciona un daño que varia entre 1000 y 2000 de manera aleatoria
//   a. Muestre cual fue el daño recibido por el contrincante en cada golpe
//   b. Muestre el daño total final que el enemigo recibió
let totalDamage = 0
for(i = 1; i <= 10; i++) {
      let numberRandom = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000)
      totalDamage = numberRandom + totalDamage
      alert(`El golpe número ${i} realizó un daño de ${numberRandom}`)                    
}
alert(`El daño total que recibió el enemigo fue de: ${totalDamage}`)