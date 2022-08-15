var cantidadJugadas = prompt(`Ingrese la cantidad de veces que desea jugar
Maximo de 5 jugadas`);
var piedra = 0;
var papel = 1;
var tijeras = 2;
var jugadaUsuario = prompt(
  `Ingresa tu jugada equivalente a:
    Piedra 👊= 0
    Papel 🖐= 1
    Tijeras ✌= 2`
)


function juego(jugador, maquina) {
  if (!jugador) return;
  if (jugador === maquina) {
    console.log("empate");
  } else if (
    (jugador === 1 && maquina === 0) ||
    (jugador === 2 && maquina === 1) ||
    (jugador === 0 && maquina === 2)
  ) {
    console.log("ganaste");
  } else {
    console.log("perdiste");
  }
}
while (cantidadJugadas > 0 && cantidadJugadas <= 5) {
  var cachipun = [0, 1, 2];
  var jugadaUsuario = prompt(
    `Ingresa tu jugada:
      Piedra 👊= 0
      Papel 🖐= 1
      Tijeras ✌= 2`
  );
  var maquina = Math.floor(Math.random() * (0, cachipun.length - 1));
  console.log(
    `Has elegido ${jugadaUsuario} y la maquina ha elegido ${maquina}`
  );
  cantidadJugadas = cantidadJugadas - 1;
  juego(jugadaUsuario, maquina);
}
if (cantidadJugadas > 5) {
  alert("El maximo de juegos es 5");
}
