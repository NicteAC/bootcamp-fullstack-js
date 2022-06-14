"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mostrarImpuesto = document.getElementById("mostrarImpuesto");
var impuestos = new _impuestos["default"](1000, 200);
var cliente = new _cliente["default"]("Cliente uno", impuestos);
console.log("El impuesto a pagar es ".concat(cliente.calcularImpuesto()));
mostrarImpuesto.append("\nImpuesto a pagar ".concat(cliente.calcularImpuesto(), " ,\nMonto Bruto Anual ").concat(cliente.impuesto.montoBrutoAnual, " ,\nDeducciones ").concat(cliente.impuesto.deducciones, "\n"));
console.log(cliente);