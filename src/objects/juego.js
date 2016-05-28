var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

/*Crear nuevo juego con los jugadores jugador1,jugador2
Considerar:
	P: Donde se registran las cartas guardadas?
	PosibleFix: Tener un tablero con las cartas jugadas y otros atributos
	que ayuden a controlar las cartas jugadas si es necesario, se podria usar un arreglo de cartas
	si no hace falta ningun tratamiento especial para las cartas jugadas
	
*/
function Juego(jugador1,jugador2) {
	this.jugador1 = jugador1;
	this.jugador2 = jugador2;
	this.puntosJ1 = 0;
	this.puntosJ2 = 0;
	this.ronda = null;//TODO: new Ronda();
	this.turno = jugador1;
}

//Rota entre turnos
//TODO: Si turno = jugador1, cambiar a jugador 2
//	Si turno = jugador2, cambiar a jugador 1
function cambiarTurno() {
	return null
}



