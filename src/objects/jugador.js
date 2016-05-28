var moduloMano = require("../objects/mano.js");
var Mano = moduloMano.mano;

var mano;

Jugador.prototype.setMano = function (m){
    mano = m;
}

function Jugador(str) {
    this.name=str;
}

Jugador.prototype.getName = function () {
    return this.name;
}

module.exports.jugador = Jugador;
