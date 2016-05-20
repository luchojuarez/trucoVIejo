var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;



function Jugador(str) {
    this.name=str;
}

Jugador.prototype.getName = function () {
    return this.name;
}

module.exports.Jugador = Jugador;
