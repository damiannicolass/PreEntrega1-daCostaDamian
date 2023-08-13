/*const resta = (a, b) => a - b;
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
}*/




const vehiculos = [
{ marca: "chevrolet", valorCuota: 10000},
{ marca: "volkswagen", valorCuota: 5000},
{ marca: "fiat", valorCuota: 7000},
{ marca: "peugeot", valorCuota: 4000},  
];

let marca = prompt("Ingrese la marca del vehiculo a cotizar");
let nombre = prompt("Ingresa tu nombre");

while (marca != "ESC") {
const vehiculo = vehiculos.find((item) => item.marca === marca);

if(vehiculo){
  let mensaje = `${nombre} el valor de la cuota para tu ${vehiculo.marca} es de $${vehiculo.valorCuota}`;

  alert(mensaje);
} else{
  alert("no aseguramos esa marca");
}

 marca = prompt("ingrese la marca del vehiculo a cotizar");
}

//