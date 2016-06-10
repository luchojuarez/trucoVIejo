var expect = require ("chai").expect;
var assert = require ("chai").assert;

var moduloRonda = require("../src/objects/ronda.js");
var Ronda = moduloRonda.ronda;

var moduloQueue = require("../src/library/queue.js");
var Queue = moduloQueue.queue;

var moduloJugador = require("../src/objects/jugador.js");
var Jugador = moduloJugador.jugador;

var moduloMano = require("../src/objects/mano.js");
var Mano = moduloMano.mano;

var moduloCarta = require("../src/objects/carta.js");
var Carta = moduloCarta.carta;

var moduloInterface = require("../src/objects/interface.js");
var Interface = moduloInterface.interface;

describe ("Ronda",function() {
    var manoJugador1 = new Mano([new Carta("Basto",4),new Carta("Basto",1),new Carta("Espada",7)]); //25 puntos
    var manoJugador2 = new Mano([new Carta("Copa",4),new Carta("Copa",7),new Carta("Espada",11)]);  //31 puntos
    var jugador1 = new Jugador("Lucho",manoJugador1,"Mano");
    //console.log(jugador1.mano.cartas[0]);
    var jugador2 = new Jugador("Jacqui",manoJugador2,"Pie");
    var round = new Ronda(jugador1,jugador2);
    var colaDeMensajes = new Queue();
    colaDeMensajes.enqueue("Envido");
    colaDeMensajes.enqueue("Quiero");
    colaDeMensajes.enqueue("Truco");
    colaDeMensajes.enqueue("No Quiero");
    var i = new Interface(colaDeMensajes);
    console.log("RESULTADO");
    console.log(round.playARound(i));
    it("Canto envido",function() {
        jugador1=jugador2;
    })
})
