var jugadaUsuario = Swal.fire({
  title: `Ingresa tu jugada:
    Piedra 👊= 0
    Papel 🖐= 1
    Tijeras ✌= 2`,
  input: "text",
});
var numeroJugadas = Swal.fire({
  title: "Ingresa la cantidad de veces que deseas jugar",
  input: "text",
});

console.log(jugadaUsuario);
var piedra = 0;
var papel = 1;
var tijeras = 2;
