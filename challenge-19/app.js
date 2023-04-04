// Realice un programa que dada la vida de un personaje, indique una acción: ∙ Si la vida es menor a 50, que cure nuestro personaje con una poción grande de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es menor a 75, que cure nuestro personaje con una poción chica de vida y nos muestre la vida actual después de haberlo curado.
// ∙ Si la vida es mayor o igual a 75 que no cure a nuestro personaje y nos informe de ello.
// ∙ la poción de vida chica cura 25 y la grande 50.

let personaje = parseInt(prompt("Ingrese la vida del personaje"));
let posionChica = 25;
let posionGrande = 50;

if (personaje < 50) {
  alert(`El personaje tomó una posión grande pasó de tener ${personaje}HP a ${personaje + posionGrande}HP`);
} else if(personaje < 75) {
      alert(`El personaje tomó una posión chica pasó de tener ${personaje}HP a ${personaje + posionChica}HP`)
} else if(personaje >= 75 && personaje <= 100) {
      alert(`Nuestro personaje tiene ${personaje}HP por lo tanto no puede ser curado`)
} else {
       alert("Cantidad de vida incorrecta, es de 0 a 100HP")
}
