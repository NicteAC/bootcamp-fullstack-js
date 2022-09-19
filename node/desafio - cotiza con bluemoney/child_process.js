const child_process = require("child_process");
const [, , file, ext, divisa, cantidad] = process.argv;
child_process.exec(
  `node main.js ${file} ${ext} ${divisa} ${cantidad}`,
  (err, result) => {
    if (err) {
      return console.log("Ha ocurrido un error");
    }
    console.log(result);
  }
);
