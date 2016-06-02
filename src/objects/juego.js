var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

/*Crear nuevo juego con una lista de jugadores (jugador1, jugador2)
Funcionalidades del objeto
	*Registra quien es la mano del juego
	*Registra los puntos de cada equipo
	*Avanza de ronda
	*Registra las rondas jugadas
	*Conoce el orden de como juegan los jugadores(sabe quien sigue despues de un jugador)
	*Sabe cuando el juego termina
	

	
*/
function Juego(jugadores) {
	this.jugadores = jugadores;
	this.puntosE1 = 0;
	this.puntosE2 = 0;
	this.rondas = [];
	this.mano = jugadores[0];
	this.ronda = new Ronda(this,this.mano);
}

//Obtiene el turno del jugador que le sigue a otro
Juego.prototype.quienSigue = function(unJugador) {
	var indiceDelActual = this.jugadores.indexOf(unJugador);
	if (indiceDelActual == this.jugadores.length - 1) {	
		return (this.jugadores[0]);
	}
	return (this.jugadores[indiceDelActual+1]);
	
}

//Terminar la ronda actual y emepzar una nueva
Juego.prototype.nuevaRonda = function () {
	//TODO: registrar la ronda actual, crear la nueva, asignar la nueva mano (siguiente del que era mano antes)
}


//Output: True si alguno de los puntos de cada equipo llego o supero el puntajeMaximo
//	  False si ninguno llego o supero el puntaje maximo
Juego.prototype.termino = function () {
	return (this.puntosE1 >= this.puntajeMaximo ||  this.puntosE2 >= this.puntajeMaximo);
}

	
	

module.exports.juego = Juego;

