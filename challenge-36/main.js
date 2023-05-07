// Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se ocnsidera que un contaacto es igual a otro cuando sus nombre son iguales. 
// Una agenda de contactos está formanda por un conunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto(10)
// Los métodos de la agenda serán los siguientes: 

// añadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar más contactos indicar por pantalla 
// existeContacto(Contacto): Indica si el contacto pasado existe o no
// listarContactos(): lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(contacto c): Elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla 
// agendaLlena(): indica si la agenda está llena 
// huecosLibres(): indica cuantos contactos más podemos ingresar

// Crear un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y por consola. 

let agendaContactos = []
let abrirAgenda = confirm("¿Desea abrir su agenda?")

while (abrirAgenda) {
      let queHacer = prompt("Introduzca un número dependiendo que función desea hacer, 1-Añadir Contacto, 2-Existe Contacto, 3-Listar Contacto, 4-Buscar Contacto, 5-Eliminar Contacto, 6-Agenda Llena, 7-Huecos Libres");
      let nombre = prompt("Ingrese su nombre");
    if (queHacer == 1 && (agendaContactos.length <= 9)) {
      let telefono = prompt("Ingrese su teléfono");
      let existeContacto = agendaContactos.find(elemento => elemento.includes(nombre))
     for(i = 0; i <= 9; i--) {
      if(existeContacto) {
            console.log("Contacto ya existente");
           break;
      } else{
            agendaContactos.push((i = [nombre, telefono]));
      }
     }
     abrirAgenda = confirm("¿Desea abrir su agenda?");
    } else if(queHacer == 2) { 
      let existeContacto = agendaContactos.find(elemento => elemento.includes(nombre))
      if(existeContacto) {
            console.log("Contacto ya existente");
      } else {
             console.log("El contacto no existe");
      }
      abrirAgenda = confirm("¿Desea abrir su agenda?");
    }else if(queHacer == 3) {
      let listarContacto = agendaContactos.findIndex(elemento => {
            elemento.some(otherElement => {
                  otherElement == nombre;
            })
      })
      console.log(listarContacto)
       abrirAgenda = confirm("¿Desea abrir su agenda?");
    }
  };
