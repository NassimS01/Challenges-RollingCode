// - Crea una clase llamada Persona que siga las siguientes condiciones:

// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.

// Los métodos que se debe poder utilizar  son:

// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.

// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.

// mostrarDatos: devuelve toda la información del objeto.

// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona { 
constructor(nombre = "NN", edad = "No ingresada", sexo = "Otro", peso = "No ingresado", altura ="No ingresado", añoNacimiento ="No ingresado") {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.peso = peso; 
            this.altura = altura;
            this.añoNacimiento = añoNacimiento;
      }

      mostrarGeneracion(){
            if(this.añoNacimiento <= 2010 || this.añoNacimiento >= 1994) {
                  console.log(`Pertenece a la generación Z y su rasgo característico es Irreverencia`)
            } else if(this.añoNacimiento <= 1993 || this.añoNacimiento >= 1981) {
                  console.log(`Pertenece a la generación Y y su rasgo característico es Frustración`)
            } else if(this.añoNacimiento <= 1980 || this.añoNacimiento >= 1969) {
                  console.log(`Pertenece a la generación X y su rasgo característico es Obsesión por el éxito`)
            } else if(this.añoNacimiento <= 1968 || this.añoNacimiento >= 1949) {
                  console.log(`Pertenece a la generación BabyBoom y su rasgo característico es Ambición`)
            } else if(this.añoNacimiento <= 1948 || this.añoNacimiento >= 1930) {
                  console.log(`Pertenece a la generación Silent Generation(Los niños de la postguerra) y pertenece a la Austeridad`)
            } else {
                   console.log("No pertenece a ninguna generación ni rasgo característico")
            }
      }

      esMayorDeEdad(){
            if(this.edad <= 17) {
                  console.log(`Es menor de edad`)
            } else {
                   console.log(`Es mayor de edad`)
            }
      }

      mostrarDatos(){
            const datos = {
              Nombre: this.nombre,
              Edad: this.edad,
              Sexo: this.sexo,
              Peso: `${this.peso} Kilogramos`,
              Altura: `${this.altura} Centímetros`,
              Edad: this.añoNacimiento,
              DNI: this.generarDNI(),
            };
            console.log(datos)
      }

      generarDNI() {
      console.log(Math.floor(Math.random() * 100000000).toString().padStart(8, "0"))     
      }
}

const Persona1 = new Persona("Martin", 20, "Hombre", 65, 170, 2004)

