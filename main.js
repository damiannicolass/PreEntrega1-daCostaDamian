const resta = (a, b) => a - b;
const descuentoAuto = (x) => x * 0.10;
const descuentoMoto = (x) => x * 0.50;

let tipoVehiculo = prompt("Ingrese el tipo de vehículo que posee:");

if (tipoVehiculo == "auto") {

  for (let i = 1; i <= 3; i++) {
    let nombre = prompt("Ingrese su nombre:")
    let cuota = parseInt(prompt("Ingrese el valor de su cuota y obtenga un 10% de descuento"));

    // precio de la cuota - descuento
    let nuevaCuota = resta(cuota, descuentoAuto(cuota));

    alert(`Descuento N°${i}: Hola ${nombre}, su nueva cuota es de: $${nuevaCuota}`);
  }
} else if (tipoVehiculo == "moto") {

  for (let i = 1; i <= 3; i++) {
    let nombre = prompt("Ingrese su nombre:")
    let cuota = parseInt(prompt("Ingrese el valor de su cuota y obtenga 50% de descuento"));

    // precio de la cuota - descuento
    let nuevaCuota = resta(cuota, descuentoMoto(cuota));

    alert(`Descuento N°${i}: Hola ${nombre}, su nueva cuota es de: $${nuevaCuota}`);
  }
}
else {
  alert("no tenemos descuentos para el bien ingresado");
}









