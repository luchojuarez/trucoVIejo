var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

function Duelo(ronda) {
	this.ronda = ronda;
	this.cartasJugadas = [];
	this.resultado = null;
	this.mejorJugadaA = null; //Una carta y el jugador que la jugo
	this.mejorJugadaB = null; //Una carta y el jugador que la jugo
}


/*Suponemos que el jugador tiene la carta
//TODO: Apila la carta en cartasJugadas
//	Dependiendo del jugador que juego se actualiza mejorJugadaA o mejorJugadaB
//      Avisarle a la ronda que se jugo una carta para actualizar las maquinas de estado
//	Cambiar el turno de la ronda
*/	
Duelo.prototype.jugarCarta = function (carta) {

}
Duelo.prototype.actualizarJugada = function (carta) {
	if (this.ronda.quienJuega.equipo == 1) {
		//Ver si la carta que se juega es mejor que la mejorJugada de A
	}
	else {
		//Ver si la carta que se juega es mejor que la mejorJugada de B
	}
}

module.exports.duelo = Duelo;
		
