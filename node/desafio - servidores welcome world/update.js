const fs = require("fs");
function actualizar (params, res) {
  const { nombre, nuevoNombre } = params;
  fs.rename(`files/${nombre}`, `files/${nuevoNombre}`, (err) => {
    if (err) {
      res.write("Error al renombrar el archivo");
      return res.end();
    }
    res.write(`El archivo ${nombre} fue renombrado a ${nuevoNombre}`);
    res.end();
  });
};
module.exports = {
  actualizar,
};