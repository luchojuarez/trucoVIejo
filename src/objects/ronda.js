var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

/*El objeto Ronda representa una ronda en el juego, una ronda esta asociada a un objeto juego
En una ronda los jugadores pueden:
	*Jugar una carta
	*Aumentar la apuesta del truco
	*Aumentar la apuesta del envido con envido,real envido o falta envido segun sea valido
	*Aceptar o Rechazar las apuestas
Las jugadas permitidas para aumentar apuestas y rechazarlas/aceptarlas son controladas por una maquina de estados
Jugar una carta es controlado por otra maquina de estado

Modelado:
	ronda tiene una lista de duelos, 3 como maximo 
	ronda tiene un duelo corriente
	ronda tiene un juego asociado
	ronda tiene una pila de jugadasTruco
	ronda tiene una pila de jugadasEnvido
	ronda tiene un par con los puntos del truco y del envido acumulados
	ronda tiene una lista con los resultados de cada duelo hasta el momento

*/



function Ronda(juego,mano) {

	this.juego = juego;
	this.duelos = [];
	this.quienJuega = mano; //El turno de cada ronda empieza con la mano
	this.dueloCorriente = new Duel(this);

}

Ronda.prototype.jugadaValida = function (jugada) { //TODO 
}
Ronda.prototype.invocar = function (jugada) { //TODO 
}
module.exports.ronda = Ronda;
