
let confirmOperation = confirm("Desea realizar una operación?")

const calculator = (n1, n2) => {
  let operation = prompt(
    "Que operación desea realizar. 1: Suma, 2: Resta, 3: Multiplicación, 4: División"
  );
  
if(operation == 1) {
      let suma = n1 + n2
      document.write(`La Suma de ${n1} + ${n2} es: ${suma}`)
  } else if(operation == 2) {
      let resta = n1 - n2
      document.write(`La Resta de ${n1} - ${n2} es: ${resta}`);
  } else if(operation == 3){
      let multiplicacion = n1 * n2
      document.write(`La multiplicacion de ${n1} x ${n2} es: ${multiplicacion}`)
  } else if(operation == 4) {
      let division = n1 / n2
      document.write(`La division de ${n1} / ${n2} es: ${division.toFixed(2)}`);
  } else {
      alert("Operación no válida. Vuelva a Intentarlo")
  }
};

while (confirmOperation) {
  let numberOne = parseInt(prompt("Ingrese un número"));
  let numberTwo = parseInt(prompt("Ingrese otro número"));

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    alert("Debe ingresar números.");
  } else {
    calculator(numberOne, numberTwo);
    break
  }
}


