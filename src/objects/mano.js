var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

// crea el prototipo mano
function Mano() {
    this.cartas = [];
}
function Mano(cartas) {
    var i = 0;
        this.cartas= [];
    while (cartas.length > 0 && i < 3) {
        tnis.cartas.push(cartas.pop());
        i++;
    }
// Dada dos cartas retorna el los puntos que suman entre ambas
function puntosDeDosCartas(a,b) {
    var puntos=0;
    if (a.getPalo() == b.getPalo()) {
        puntos = 20 + a.getPuntos() + b.getPuntos();
        }
    }
    return puntos;
}

// retorna los puntos de la mano actual (this)
Mano.prototype.puntos = function() {
    var p1 = puntosDeDosCartas(this.cartas[0],this.cartas[1]);
    var p2 = puntosDeDosCartas(this.cartas[0],this.cartas[2]);
    var p3 = puntosDeDosCartas(this.cartas[1],this.cartas[2]);
    var puntos = Math.max(p1,Math.max(p2,p3));
    
/* Que hace esto?   
      if (puntos == 0) {
        if (this.carta1.getNumero()<8) { p1 = this.carta1.getNumero();}
        if (this.carta2.getNumero()<8) { p2 = this.carta2.getNumero();}
        puntos = Math.max(p1,Math.max(p2,p3));
        if (this.carta3.getNumero()<8) { p3 = this.carta3.getNumero();}
        }  */
    return puntos;
}

TODO: Get 
Mano.prototype.sacarTres = function (mazo) {
}

module.exports.mano = Mano;
