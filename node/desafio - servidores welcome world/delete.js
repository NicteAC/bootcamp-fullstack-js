const fs = require("fs");
function eliminar (params, res) {
  const { archivo } = params;
  fs.unlink(`files/${archivo}`, (err) => {
    if (err) {
      res.write("Error al eliminar el archivo");
      return res.end();
    }
    res.write("El archivo ha sido eliminado exitosamente");
    res.end();
  });
};
module.exports = {
    eliminar,
  };