const http = require("http");
const url = require("url");
const fs = require("fs");
const { crear } = require("./create");
const { leer } = require("./read");
const { actualizar } = require("./update");
const { eliminar } = require("./delete");

const server = http.createServer((req, res) => {
  const params = url.parse(req.url, true).query;
  if (req.url.startsWith("/crear")) {
    crear(params, res);
    return;
  }

  if (req.url.startsWith("/leer")) {
    leer(params, res);
    return;
  }

  if (req.url.startsWith("/renombrar")) {
    actualizar(params, res);
    return;
  }

  if (req.url.startsWith("/eliminar")) {
    eliminar(params, res);
    return;
  }

  res.write("Ruta no encontrada");
  res.end();
});

server.listen(8080), () => console.log("Server running on port 8080");
