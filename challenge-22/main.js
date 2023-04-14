// Un hospital quiere que le hagamos una aplicación inteligente donde el paciente ponga sus datos, su dolencia y se determine que tipo de estudio debe realizarse
// A tener en cuenta: A las mujeres embarazadas no se les puede hacer una tomografía o una placa porque puede tener efectos teratogénicos


let datosUser = prompt("Nombre").toUpperCase()
let genero = prompt("ingrese su género").toLowerCase()
let dolencia = prompt("Que dolencia presenta").toLowerCase()

let tiposDeDolencias = [
      "comezón en el cuerpo",
      "dolor de cabeza",
      "fiebre",
      "dolor de huesos"
];

let valueDolencias = tiposDeDolencias.indexOf(dolencia)

let noRealizarTomo = ["dolor de huesos", "dolor de cabeza"];

if (genero == "femenino" &&
  tiposDeDolencias.includes(dolencia) && noRealizarTomo.includes(dolencia) &&
  confirm("¿Se encuentra embarazada?")){
      alert(`Paciente: ${datosUser} no puede realizarse una tomografía ya que está embarazada, consulte con su médico clínico que estudio debe realizarse`);
} else if(tiposDeDolencias[valueDolencias] == dolencia) {
      alert(`Paciente ${datosUser} debe realizarse una tomografía computarizada`)
} else if (tiposDeDolencias[valueDolencias] == dolencia) {
  alert(`Paciente ${datosUser} debe recurrir a un dermatólogo`);
} else if (tiposDeDolencias[valueDolencias] == dolencia) {
  alert(`Paciente ${datosUser} debe ir a realizarse una densitometría ósea`);
} else {
  alert(`Dolencia no identificada, consulte con su médico clínico`);
}


