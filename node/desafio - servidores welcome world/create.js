const fs = require("fs");
function crear(params, res) {
  const { archivo, contenido } = params;
  fs.writeFile(`files/${archivo}`, contenido, "utf8", (err) => {
    if (err) {
      res.write("Error al crear el archivo");
      return res.end();
    }
    res.write("Archivo creado");
    res.end();
  });
}
module.exports = {
  crear,
};
