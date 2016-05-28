var moduloMano = require("../objects/mano.js");
var Mano = moduloMano.mano;



function Jugador(str) {
    this.name=str;	//Nombre del jugador
    this.mano=new Mano(); //Mano del jugador
}

/*
robarMano(mazo) inicializa la mano del jugador con 3 cartas sacando las cartas de un mazo
y calcula los puntos para el envido de la nueva mano
TODO: agregar 3 cartas a this.mano desde la variable mazo que es un arreglo de cartas
luego de tener las 3 cartas guardar los puntos para el envido de la mano en puntosEnvido
*/
Jugador.prototype.robarMano = function (mazo) { return null } 

//Guarda los puntos del envido de este jugador con la mano corriente
Jugador.prototype.puntosEnvido;

//Juega la carta numero i de la mano
//TODO: retornar la carta en la posicion i de la mano, la mano ya no tiene esa carta
Jugador.prototype.jugarCarta = function (i) { return i } 

Jugador.prototype.getName = function () {
    return this.name;
}

module.exports.Jugador = jugador;
