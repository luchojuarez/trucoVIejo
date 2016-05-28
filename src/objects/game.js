var moduloMazo = require("../objects/mazo.js");
var Mazo = moduloMazo.mazo;
var moduloMano = require("../objects/mano.js");
var Mano = moduloMano.mano;


var mazo;
var p1;
var p2;


function Game(player1,player2) {
    this.mazo = new Mazo();
    var m1 = new Mano(this.mazo.darCartas());
    var m2 = new Mano(this.mazo.darCartas());
    this.p1 = player1;
    this.p2 = player2;
    this.p1.setMano(m1);
    this.p2.setMano(m2);
}

Game.prototype.getMazo = function() {
    return this.mazo;
}


module.exports.game = Game;
