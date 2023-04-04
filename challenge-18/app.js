//Dada las revoluciones por minuto de un auto en un juego de carreras, indique si el conductor debe seguir con el mismo cambio, bajarlo o aumentarlo. Sabiendo que:

let userRPM = parseInt(prompt("Ingrese RPM(max: 6000)"))

let lessRPM = 1000
let greatherRPM = 3000

if(userRPM < lessRPM) {
      console.log("Debe bajar de cambio")
} else if(userRPM >= lessRPM && userRPM < greatherRPM) {
      console.log("Mantenga la cambio")
} else if(userRPM >= greatherRPM && userRPM <= 6000) {
      console.log("Suba de cambio")
} else {
       console.log("RPM inválido")
}