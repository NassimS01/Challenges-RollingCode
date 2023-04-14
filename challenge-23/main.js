const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']

let numeroDNI = 0;

let cancel = true

const maxValue = 999999999

while (numeroDNI <= maxValue || cancel == true || numeroDNI == isNaN) {
  numeroDNI = parseInt(prompt("Introduzca su DNI, sin puntos"));
  let resto = numeroDNI % 23;
  if (numeroDNI < maxValue) {
    alert(`La letra que le tocó fue ${letters[resto]}`);
    break
  } else if(isNaN(numeroDNI)) {
      alert("No puede introducir símbolos ni letras, solo números")
      cancel = confirm("Presione aceptar para volver a introducir un valor")
  }
}