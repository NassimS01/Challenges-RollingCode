//La app pide números hasta que pida cancelar.
//Cuando se cancela se deben mostrar todos los números ingresados juntos.
//y si se ingresa algo que no sea válido se debe mostrar un alert y seguir
//pidiendo un número.

let confirmToNumbers = confirm("Presione aceptar para ingresar un número")
let numbersToUser; 
let allNumbers = [];

while(confirmToNumbers) {
      numbersToUser = parseInt(prompt("Ingrese un número"))
      if(isNaN(numbersToUser)) {
            alert("Solo se pueden ingresar números. No letras ni símbolos.")
      } else {
            confirmToNumbers = confirm(
              "Si desea cancelar, presione 'Cancelar'"
            );
            allNumbers.push(numbersToUser);
      }
}

console.log(allNumbers);