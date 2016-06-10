var moduloMano = require("../objects/mano.js");
var Mano = moduloMano.mano;
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;
var moduloInterface = require("../objects/interface.js");
var Interface = moduloInterface.interface;

Jugador.prototype.mano;
Jugador.prototype.name;
Jugador.prototype.tipo;//"Mano" o "Pie"

function Jugador(str) {
    this.name=str;
}
function Jugador(str,m) {
    this.name=str;
    this.mano=m;
}
function Jugador(str,m,t) {
    this.name=str;
    this.mano=m;
    this.tipo=t;
}

Jugador.prototype.setMano = function (m){
    this.mano = m;
}

//Es turno del jugador actual
/*juega:
    *Truco
    *Envido
    *Tirar carta
*/
Jugador.prototype.play = function (i) {
    var jugada = i.getMensaje();
    if (typeof(jugada)=="string") {
        return jugada
    }
    else {

    }
}

Jugador.prototype.getName = function () {
    return this.name;
}
Jugador.prototype.getMano = function () {
    return this.mano;
}
Jugador.prototype.getTipo = function () {
    return this.tipo;
}
Jugador.prototype.setTipo = function (t) {
    this.tipo=t;
}

module.exports.jugador = Jugador;
module.exports.Jugador = Jugador;
