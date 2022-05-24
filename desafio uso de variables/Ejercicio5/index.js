var numero1 = prompt("Ingrese un primer numero");
var numero2 = prompt("Ingrese un segundo numero");
var numero3 = prompt("Ingrese un tercer numero");
var numero4 = prompt("Ingrese un cuarto numero");
var numero5 = prompt("Ingrese un quinto numero");

var suma =
  parseInt(numero1) +
  parseInt(numero2) +
  parseInt(numero3) +
  parseInt(numero4) +
  parseInt(numero5);

var promedio =
  (parseInt(numero1) +
    parseInt(numero2) +
    parseInt(numero3) +
    parseInt(numero4) +
    parseInt(numero5)) /
  5;

alert("La suma de todos los numeros es: " +suma)
alert("El promedio de todos los numeros es: " +promedio)