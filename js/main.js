// Calcular costo total de productos y/o servicios seleccionados por el usuario.

// Variables
const IVA = 1.21;
let producto;
let total = 0;

// Ciclo para pedir un precio por cada iteración y calcular total
do {
    producto = prompt('Ingrese el precio del producto (ingrese "FIN" para finalizar): ');
    let productoParseado = parseFloat(producto);
    
    if (productoParseado) {
        total += (productoParseado * IVA);
    }

} while (producto != 'FIN');

// Validar que se ingresaran precios válidos
if (total > 0) {
    alert('El costo total es de : $' + total + '. Incluyendo IVA del %21.');
} else {
    alert('Operación no válida. Intente nuevamente.')
}
