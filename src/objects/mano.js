var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;
var _ = require('lodash');
// crea el prototipo mano
function Mano() {
	this.cartas = [];
}

// Dada dos cartas retorna el los puntos que suman entre ambas
function puntosDeDosCartas(a,b) {
	var puntos=0;
	if (a.getPalo() == b.getPalo()) {
		puntos = 20 + a.getPuntos() + b.getPuntos();
	}
	else {
		puntos = Math.max(a.getPuntos(),b.getPuntos());
	}
	//console.log(a.getPalo(), b.getPalo(), "=", a.getPalo() == b.getPalo() , puntos);
	return puntos;
}

// retorna los puntos de la mano actual (this)
Mano.prototype.puntos = function() {
	if (this.cartas.length != 3) {
		throw new Error('[Error] Faltan cartas en la mano para ver los puntos');
	}
	else {
		var p1 = puntosDeDosCartas(this.cartas[0],this.cartas[1]);
		var p2 = puntosDeDosCartas(this.cartas[0],this.cartas[2]);
		var p3 = puntosDeDosCartas(this.cartas[1],this.cartas[2]);
		var puntos = Math.max(p1,Math.max(p2,p3));
    }
    return puntos;
}

//Input:Arreglo de cartas
//Guarda en cartas (prototipo) el arreglo pasado
Mano.prototype.robarMano = function(cartas) {
	this.cartas = cartas;
}

//Input:Indice de la carta a jugar, comenzado desde 0
//output:Elimina la carta en la posicion i del arreglo de cartas y la retorna
Mano.prototype.jugarCarta = function(i) {
	return _.head(this.cartas.splice(i,1))
}

//Input:Una carta
//Añade la carta al final del arreglo de cartas
Mano.prototype.addCarta = function(carta) {
	this.cartas.push(carta);
}
module.exports.mano = Mano;
