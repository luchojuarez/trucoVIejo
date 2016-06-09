var moduloMazo = require("../objects/mazo.js");
var Mazo = moduloMazo.mazo;
var moduloMano = require("../objects/mano.js");
var Mano = moduloMano.mano;

Game.prototype.mazo;
Game.prototype.p1;
Game.prototype.p2;


function Game(player1,player2) {
    this.mazo = new Mazo();
    var arregloCartas = this.mazo.darCartas();
    var m1 = new Mano(arregloCartas);
    arregloCartas = this.mazo.darCartas();
    var m2 = new Mano(arregloCartas);
    this.p1 = player1;
    this.p2 = player2;
    this.p1.setMano(m1);
    this.p2.setMano(m2);

}

Game.prototype.getMazo = function() {
    return this.mazo;
}


module.exports.game = Game;
