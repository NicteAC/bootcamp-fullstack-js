// funcion constructora consultorio
function Consultorio(nombreConsultorio, paciente) {
  this._nombre = function () {
    return nombreConsultorio;
  };
  this._paciente = function () {
    return paciente || [];
  };
}
// getters y setters
Consultorio.prototype.getNombre = function () {
  return this._nombre();
};
Consultorio.prototype.getPaciente = function () {
  return this._paciente().forEach(function (elemento, indice) {
    console.log("Numero de registro: " + (indice + 1));
    console.log("Nombre: " + elemento._nombre());
    console.log("Edad: ", elemento._edad());
    console.log("Rut: " + elemento._rut());
    console.log("Diagnostico: ", elemento._diagnostico());
  });
};
Consultorio.prototype.setNombre = function (nombreConsultorio) {
  this._nombre = function () {
    return nombreConsultorio;
  };
};
Consultorio.prototype.setPaciente = function (paciente) {
  this.paciente.push(paciente);
};
// funcion constructora paciente
function Paciente(
  nombrePaciente,
  edadPaciente,
  rutPaciente,
  diagnosticoPaciente
) {
  this._nombre = function () {
    return nombrePaciente;
  };
  this._edad = function () {
    return edadPaciente;
  };
  this._rut = function () {
    return rutPaciente;
  };
  this._diagnostico = function () {
    return diagnosticoPaciente;
  };
}
// getters y setters
Paciente.prototype.getNombre = function () {
  return this._nombre();
};
Paciente.prototype.getEdad = function () {
  return this._edad();
};
Paciente.prototype.getRut = function () {
  return this._rut();
};
Paciente.prototype.getDiagnostico = function () {
  return this._diagnostico();
};
Paciente.prototype.setNombre = function (nombrePaciente) {
  this._nombre = function () {
    return nombrePaciente;
  };
};
Paciente.prototype.setEdad = function (edadPaciente) {
  this._edad = function () {
    return edadPaciente;
  };
};
Paciente.prototype.setRut = function (rutPaciente) {
  this._rut = function () {
    return rutPaciente;
  };
};
Paciente.prototype.setDiagnostico = function (diagnosticoPaciente) {
  this._diagnostico = function () {
    return diagnosticoPaciente;
  };
};
// Metodo para buscar pacientes por nombre
Consultorio.prototype.buscarPacientesPorNombre = function (nombrePaciente) {
  console.log("Criterio de busqueda: " + nombrePaciente);
  var pacientesFiltrados = this._paciente()
    .filter(function (elemento) {
      return (
        elemento._nombre().toLowerCase().indexOf(nombrePaciente.toLowerCase()) >
        -1
      );
    })
    .map(function (elemento, indice) {
      console.log("# " + (indice + 1) + " :");
      console.log("Nombre: " + elemento._nombre());
      console.log("Edad: " + elemento._edad());
      console.log("Rut: " + elemento._rut());
      console.log("Diagnostico: " + elemento._diagnostico());
    });
  if (pacientesFiltrados.length === 0) {
    console.log("No se encontraron coincidencias");
  }
  return pacientesFiltrados;
};

// Metodo para mostrar todos los datos de todos los pacientes
Consultorio.prototype.mostrarDatos = function () {
  this.getPaciente();
};
// Declaracion e instancia de objetos de Paciente y Consultorio
var paciente1 = new Paciente("Juan Perez", "31 a", "18.365.445-1", "Covid");
var paciente2 = new Paciente(
  "Renato Toro",
  "25 a",
  "2.222.222-2",
  "Escoliosis"
);
var paciente3 = new Paciente("Juan Martinez", "5 a", "30.852.951-0", "Infarto");

var arregloPacientes = [paciente1, paciente2, paciente3];
var consultorio1 = new Consultorio(
  "Consultorio Medico del Estado",
  arregloPacientes
);
// Invoca metodos requeridos
consultorio1.buscarPacientesPorNombre("Renato"); // busqueda de pacientes por nombre ej. Renato
consultorio1.mostrarDatos(); //Listado de todos los pacientes y sus datos
