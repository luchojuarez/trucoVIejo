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
//asigna un equipo al jugador  y lo retorna
var asignarEquipo = function (jugador,equipo) {
	jugador.equipo = equipo;
	return jugador
}

//Pre: jugadoresA.length = JugadoresB.length
function Juego(jugadoresA,JugadoresB) {
	//Inicializacion de los jugadores con sus equipos
	//jugador.equipo = N
	//	*N representa el numero del jugador en el equipo
	//	*si N es positivo, jugador es del equipo A sino jugador es del equipo B}
	//La informacion de mas no hace mal! podria servir para implementar las puntas de un juego de 6
	for (var i = 1; i<jugadoresA.length; i++) {
		this.jugadores.push(jugadoresA.shift().asignarEquipo(i);
		this.jugadores.push(jugadoresB.shift().asignarEquipo(-i);
	}
	this.puntos = [0,0] //puntos[0] = equipo 1 | puntos [1] = equipo -1 
	this.rondas = [];
	this.quienCanta = 1 //Valor positivo = equipo A, Valor negativo = equipo B 
	this.mano = jugadores[0]; // mano empieza por el primer jugador del equipoA
	this.ronda = new Ronda(this,this.mano);
}

//Terminar la ronda actual y emepzar una nueva
Juego.prototype.siguienteRonda = function () {
	//TODO: registrar la ronda actual, crear la nueva, asignar la nueva mano (siguiente del que era mano antes)
}

/*	Un jugador canta {envido,realenvio,faltaenvido,truco,retruco,valecuatro}
	Cantar no es posible cuando:
		-El jugador que intenta cantar no pertenece al equipo que tiene el turno para cantar
		-Lo que intenta cantar no es valido
	TODO: Funciones en ronda para validar la jugada y hacer la jugada
*/
Juego.prototype.cantar(jugador,jugada) {
	if ((jugador.equipo * this.equipo) <= 0) { //Cuando son distintos: Negativo por positivo -> negativo 
		console.log(jugador.nombre," no puedes cantar, le toca al otro equipo");
		return null;
	}
	/*
	//Validar jugada seria algo asi
	if (!this.ronda.jugadaValida(jugada) { //TODO: jugadaValida en ronda
		console.log(jugador.nombre," no puedes cantar eso);
		return null;
	}
	
	this.ronda.invocar(jugada); //Ronda maneja la jugada

	this.quienCanta *= -1 //Cambiar turno para cantar
	
	*/

//Obtiene el turno del jugador que le sigue a otro
Juego.prototype.quienSigue = function(unJugador) {
	var indiceDelActual = this.jugadores.indexOf(unJugador);
	if (indiceDelActual == this.jugadores.length - 1) {	
		return (this.jugadores[0]);
	}
	return (this.jugadores[indiceDelActual+1]);
}

//Output:True si alguno de los puntos de cada equipo llego o supero el puntajeMaximo
//	 	 False si ninguno llego o supero el puntaje maximo
Juego.prototype.termino = function () {
	return (this.puntosE1 >= this.puntajeMaximo ||  this.puntosE2 >= this.puntajeMaximo);
}

module.exports.juego = Juego;

