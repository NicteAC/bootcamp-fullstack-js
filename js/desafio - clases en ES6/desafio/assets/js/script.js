import Impuestos from "./impuestos.js";
import Cliente from "./cliente.js";

const mostrarImpuesto = document.getElementById("mostrarImpuesto");
const impuestos = new Impuestos(1000, 200);
const cliente = new Cliente("Cliente uno", impuestos);

console.log(`El impuesto a pagar es ${cliente.calcularImpuesto()}`);

mostrarImpuesto.append(`
Impuesto a pagar ${cliente.calcularImpuesto()} ,
Monto Bruto Anual ${cliente.impuesto.montoBrutoAnual} ,
Deducciones ${cliente.impuesto.deducciones}
`);

console.log(cliente);
