var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

// crea el prototipo mano
function Mano(arregloCartas) {
    Mano.prototype.carta1 = arregloCartas[0];
    Mano.prototype.carta2 = arregloCartas[1];
    Mano.prototype.carta3 = arregloCartas[2];
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
    var p1 = puntosDeDosCartas(this.carta1,this.carta2);
    var p2 = puntosDeDosCartas(this.carta2,this.carta3);
    var p3 = puntosDeDosCartas(this.carta3,this.carta1);
    var puntosActuales = Math.max(p1,Math.max(p2,p3));
    if (puntosActuales == 0) {
        if (this.carta1.getNumero()<8) { p1 = this.carta1.getNumero();}
        if (this.carta2.getNumero()<8) { p2 = this.carta2.getNumero();}
        if (this.carta3.getNumero()<8) { p3 = this.carta3.getNumero();}
        puntosActuales = Math.max(p1,Math.max(p2,p3));
    }
    return puntosActuales;
}


module.exports.mano = Mano;
