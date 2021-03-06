export default class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  get nombre() {
    return this._nombre;
  }
  get impuesto() {
    return this._impuesto;
  }

  set nombre(nombre) {
    this._nombre.push(nombre);
  }

  calcularImpuesto() {
    return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
  }
}