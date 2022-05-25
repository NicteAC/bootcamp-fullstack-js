//funcion que limpia los errores 
let limpiar = () => {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
};
//funcion que limpia los inputs
let limpiarInputs = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
}
//funcion que ejecuta el mensaje de envio exitoso
let exito = () => {
  document.querySelector(".resultado").innerHTML = "Enviado con exito :)";
};
//funcion que valida mediante regEx los inputs
let validar = (nombre, asunto, mensaje) => {
  let validacionCorrecta = true;
  let expresionRegular = /[a-zA-Z]\w+/;
  if (nombre == "" || expresionRegular.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "El nombre no debe tener numero y es un campo requerido";
    validacionCorrecta = false;
  }
  if (asunto == "" || expresionRegular.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
      "El asunto no debe tener numero y es un campo requerido";
    validacionCorrecta = false;
  }
  if (mensaje == "" || expresionRegular.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "El mensaje no debe tener numero y es un campo requerido";
    validacionCorrecta = false;
  }
  return validacionCorrecta;
};
//variable que llama al formulario por su id
let form = document.getElementById("formulario");
//
//funcion que se ejecuta cuando se gatilla el evento submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  limpiar();
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let mensaje = document.getElementById("mensaje").value;
  let resultado = validar(nombre, asunto, mensaje);
  if (resultado == true) {
    exito();
    limpiarInputs();
  }
});
