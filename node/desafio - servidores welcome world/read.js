const fs = require("fs");
function leer (params, res) {
  const { archivo } = params;
  fs.readFile(`files/${archivo}`, "utf8", (err, data) => {
    if (err) {
      res.write("Error al leer el archivo");
      return res.end();
    }
    res.write(data);
    res.end();
  });
};
module.exports = {
  leer,
};
