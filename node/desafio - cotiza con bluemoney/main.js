const https = require("https");
const fs = require("fs");

const arguments = process.argv;
const fileName = arguments[2];
const fileExt = arguments[3];
const indicator = arguments[4];
const quantity = arguments[5];
let text;

const url = "https://mindicador.cl/api";
const request = https.get(url, (response) => {
  console.log("statusCode: ", response.statusCode);
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  });
  response.on("end", () => {
    let datos = JSON.parse(data);
    let dolarValue = datos[indicator];
    let date = new Date(dolarValue.fecha);
    console.log(quantity);

    text = `
    A la fecha ${date}
    Fue realizada la cotización con los siguientes datos:
    Cantidad de pesos a convertir: ${quantity} CLP
    Convertido a "dólar da un total de: ${quantity / dolarValue.valor} USD.`;
    fs.writeFile(`${fileName}.${fileExt}`, text, "utf8", (err) => {
      if (err) {
        return console.log("Ocurrió un error en writeFile");
      }
      fs.readFile(`${fileName}.${fileExt}`, "utf8", (err, data) => {
        if (err) {
          return console.log("Ocurrió un error en readFile");
        }
        console.log(data);
      });
    });
  });
});

request.on("error", console.log);
request.end();
