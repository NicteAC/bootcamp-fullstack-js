const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  if (req.url.startsWith("/crear")) {
    const { archivo, contenido } = params;
    console.log("Listo para crear");
    fs.writeFile(`files/${archivo}`, contenido, "utf8", (err) => {
      if (err) {
        res.write("Error al crear el archivo");
        return res.end();
      }
      res.write("Archivo creado");
      res.end();
    });
  } else if (req.url.startsWith("/leer")) {
    const { archivo } = params;
    fs.readFile(`files/${archivo}`, "utf8", (err, data) => {
      if (err) {
        res.write("Error al leer el archivo");
        return res.end();
      }
      res.write(data);
      res.end();
    });
  } else if (req.url.startsWith("/renombrar")) {
    const { nombre, nuevoNombre } = params;
    console.log(params);
    fs.rename(`files/${nombre}`, `files/${nuevoNombre}`, (err) => {
      if (err) {
        res.write("Error al renombrar el archivo");
        return res.end();
      }
      res.write(`El archivo ${nombre} fue renombrado a ${nuevoNombre}`);
      res.end();
    });
  } else if (req.url.startsWith("/eliminar")) {
    const { archivo } = params;
    fs.unlink(`files/${archivo}`, (err, data) => {
      if (err) {
        res.write("Error al eliminar el archivo");
        return res.end();
      }
      res.write("El archivo ha sido eliminado exitosamente");
      res.end();
    });
  } else {
    res.write("Ruta no encontrada");
    res.end();
  }
});
server.listen(8080), () => console.log("Server running on port 8080");
