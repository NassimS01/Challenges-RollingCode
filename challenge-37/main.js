const input = document.getElementById("miInput");

alert("Adivina el número entre 1 y 20")

let numberRandom = Math.floor(Math.random() * 20)

const adivinaElNumero = () => {
      if (input.value > 20 || input.value < 0) {
            alert("Debe ingresar un número entre 1 y 20")
      }
      else if(input.value < numberRandom) {
            alert("El número ingresado es menor al número mágico")
      } else if(input.value > numberRandom) {
            alert("El número ingreado es mayor al número mágico")
      } else {
            alert(
              `FELICIDADES! EL NÚMERO INGRESADO ES IGUAL AL NÚMERO MÁGICO!!!`
            );
            location.reload()
      }
}