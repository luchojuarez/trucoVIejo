var _ = require('lodash');

var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;


Mano.prototype.cartas;
// crea el prototipo mano
function Mano(arregloCartas) {
    // Ordeno el arreglo (de forma creciente) y lo invierto (para que en la primera posicion del array quede la carta mas valiosa)
    this.cartas = (_.sortBy(arregloCartas,"peso")).reverse();
}

// Dada dos cartas retorna el los puntos que suman entre ambas
function puntosDeDosCartas(a,b) {
    var puntos=0;
    if (a.getPalo() == b.getPalo()) {
        puntos = 20;
        if (a.getNumero()<=7) {
            puntos += a.getNumero();
        }
        if (b.getNumero()<=7) {
            puntos += b.getNumero();
        }
    }
    return puntos;
}

// retorna los puntos de la mano actual (this)
Mano.prototype.puntos = function() {
    var p1 = puntosDeDosCartas(this.cartas[0],this.cartas[1]);
    var p2 = puntosDeDosCartas(this.cartas[1],this.cartas[2]);
    var p3 = puntosDeDosCartas(this.cartas[2],this.cartas[0]);
    var puntosActuales = Math.max(p1,Math.max(p2,p3));
    if (puntosActuales == 0) {
        if (this.cartas[0].getNumero()<8) { p1 = this.cartas[0].getNumero();}
        if (this.cartas[1].getNumero()<8) { p2 = this.cartas[1].getNumero();}
        if (this.cartas[2].getNumero()<8) { p3 = this.cartas[2].getNumero();}
        puntosActuales = Math.max(p1,Math.max(p2,p3));
    }
    return puntosActuales;
}

//retorna una carta
Mano.prototype.getCarta = function(index) {
    return this.cartas[index]
}


module.exports.mano = Mano;
