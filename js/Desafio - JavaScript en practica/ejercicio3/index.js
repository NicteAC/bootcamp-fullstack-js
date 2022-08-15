
let botonSumar = document.getElementById("btn-sumar");
let botonRestar = document.getElementById("btn-restar");

botonSumar.addEventListener("click", () => {
  let numeroUno = document.getElementById("valor1");
  let numeroDos = document.getElementById("valor2");
  numeroUno = parseInt(numeroUno.value);
  numeroDos = parseInt(numeroDos.value);
  document.querySelector(".resultado").innerHTML = numeroUno + numeroDos;
});

botonRestar.addEventListener("click", () => {
  let numeroUno = document.getElementById("valor1");
  let numeroDos = document.getElementById("valor2");
  numeroUno = parseInt(numeroUno.value);
  numeroDos = parseInt(numeroDos.value);
  let resultadoNegativo = numeroUno - numeroDos;
  if(resultadoNegativo <= 0){ 
    document.querySelector(".resultado").innerHTML = 0
  }else{
    document.querySelector(".resultado").innerHTML = numeroUno - numeroDos;
  }
});
