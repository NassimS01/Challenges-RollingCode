// Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.

// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.

// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

let codigo = 0
class Producto { 
      constructor(nombre, precio) {
            codigo++
            this.codigo = codigo.toString().padStart(3, 0)
            this.nombre = nombre;
            this.precio = precio;
      }
      imprimeDatos() {
            console.log(`El producto impreso es: ${this.nombre}, su código es ${this.codigo} y cuesta ${this.precio}`)
      }
}

let productos = []

const mayonesa = new Producto("Mayonesa Hellmans", "$560")
const ketchup = new Producto("Ketchup Hellmans", "$350")
const arroz = new Producto("Arroz marolio", "$130")

productos.push(mayonesa);
productos.push(ketchup);
productos.push(arroz);

const imprimeTodosLosDatos = () => {
       for (let i = 0; i < productos.length; i++) {
         console.log(productos[i].imprimeDatos());
       }
}