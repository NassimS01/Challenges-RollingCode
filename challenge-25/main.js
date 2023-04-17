// En un juego de pelea recibimos un array (generarlo) con 10 golpes aleatorios que recibe un personaje, mostrar todos los valores y luego buscar cual es el golpe mas fuerte que se dio.

// Vida de nuestro personaje
let vidaPersonaje = 100
// Declaro un array vacio
let cantidadDeGolpes = []
// Bucle para generar 10 golpes aleatorios
for(i = 1; i <= 10; i++) {
      let numerosAleatorios = Math.round(Math.random() * 10);
      cantidadDeGolpes.push(numerosAleatorios)
      vidaPersonaje = vidaPersonaje - numerosAleatorios
      alert(`Nuestro personaje recibió un golpe de ${numerosAleatorios} de potencia y le queda ${vidaPersonaje} de vida`)
}
// Ordeno el array de mayor a menor
let greatherNUM = cantidadDeGolpes.sort((a, b) => (a > b ? -1 : 1));
// Muestro en h1 cual es el golpe más fuerte que se realizó
document.write(`<h1>El golpe más fuerte que recibió nuestro personaje fue de ${greatherNUM[0]} de potencia</h1>`)


