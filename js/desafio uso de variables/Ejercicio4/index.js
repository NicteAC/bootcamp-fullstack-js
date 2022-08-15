var diasUsuario = prompt("Ingrese cantidad de dias");

var anio = Math.floor(parseInt(diasUsuario) / 365);
var semanas = Math.floor((parseInt(diasUsuario) % 365) / 7);
var dias = Math.floor((parseInt(diasUsuario) % 365) % 7);
alert(`El resultado es el siguiente : 
Años ${anio}
Semanas ${semanas}
Días ${dias}
`);