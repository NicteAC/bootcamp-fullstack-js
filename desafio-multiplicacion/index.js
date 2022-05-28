let numeroUsuario = prompt("Ingrese un numero entre 1 y 20");

let num = parseInt(numeroUsuario);
if (num >= 1 && num <= 20) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} * ${num} = ${num * i}`);
  }
  for (let i = 1; i <= num; i++) {
    let res = 1;
    for (let j= 1; j <= i; j++) {
    res = res * j;
    }
    console.log("Factorial de " + i + " es: " + res);
  }
} else {
  alert("Numero ingresado no es valido");
}
