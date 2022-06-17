
class Persona {
  constructor(edad) {
    this.edad = edad;
  }
  respuesta() {
    return `Hola tengo ${this.edad} años`;
  }
}
class Alumno extends Persona {
  constructor(edad, nombre) {
    super(edad);
    this.nombre = nombre;
  }
  respuesta() {
    return `Hola mi nombre es: ${this.nombre} y tengo ${this.edad} años`;
  }
}
class Docente extends Persona {
  constructor(edad, nombre) {
    super(edad);
    this.nombre = nombre;
  }
  respuesta() {
    return `Hola mi nombre es: ${this.nombre} y tengo ${this.edad} años`;
  }
}
class Ayudante extends Persona {
  constructor(edad, nombre) {
    super(edad);
    this.nombre = nombre;
  }
  respuesta() {
    return `Hola mi nombre es: ${this.nombre} y tengo ${this.edad} años`;
  }
}
let persona1 = new Persona(20);
let alumno1 = new Alumno(30, "Juan");
let docente1 = new Docente(35, "Jose");
let ayudante1 = new Ayudante(22, "Pedro");

console.log(persona1.respuesta());
console.log(alumno1.respuesta());
console.log(docente1.respuesta());
console.log(ayudante1.respuesta());