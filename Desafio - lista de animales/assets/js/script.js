class Propietario {
  constructor() {
    this._nombre;
    this._telefono;
    this._direccion;
  }
  get nombre() {
    return this._nombre;
  }
  get telefono() {
    return this._telefono;
  }
  get direccion() {
    return this._direccion;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  set telefono(telefono) {
    this._telefono = telefono;
  }
  set direccion(direccion) {
    this._direccion = direccion;
  }
  datosPropietario() {
    return `El nombre del dueño es ${this._nombre}. El domicilio es: ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor() {
    super();
    this._tipo;
  }
  set tipo(tipo) {
    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor() {
    super();
    this._nombreMascota;
    this._enfermedad;
  }
  set nombreMascota(nombreMascota) {
    this._nombreMascota = nombreMascota;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set enfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
  get enfermedad() {
    return this._enfermedad;
  }
}

const formulario = document.getElementById("formulario");
const propietario = document.getElementById("propietario");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const nombreMascota = document.getElementById("nombreMascota");
const tipo = document.getElementById("tipo");
const enfermedad = document.getElementById("enfermedad");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const propietarioMascota = new Propietario();
  propietarioMascota.nombre = propietario.value;
  propietarioMascota.telefono = telefono.value;
  propietarioMascota.direccion = direccion.value;
  if (tipo.value === "perro") {
    `El tipo de animal es ${tipo.value}`;
  }
  if (tipo.value === "gato") {
    `El tipo de animal es ${tipo.value}`;
  }
  if (tipo.value === "conejo") {
    `El tipo de animal es ${tipo.value}`;
  }
  const animal = new Animal();
  animal.nombreMascota = nombreMascota.value;
  animal.enfermedad = enfermedad.value;

  resultado.innerHTML = `<ul>
    <li>${propietarioMascota.datosPropietario()}</li>
    <li>El tipo de animal es ${tipo.value}, el noombre de la mascota ${
    nombreMascota.value
  } y la enfermedad es ${enfermedad.value} </li>
    </ul>`;
});
