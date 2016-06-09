var expect = require ("chai").expect;
var assert = require ("chai").assert;


var moduloGame = require("../src/objects/game.js");
var Game = moduloGame.game;

var moduloJugador = require("../src/objects/jugador.js");
var Jugador = moduloJugador.jugador;

describe("Game",function() {
    var p1 = new Jugador("Lucho");
    var p2 = new Jugador("Yacki");
    var g = new Game(p1,p2);

    console.log("mazo.length=",g.getMazo().getMazo().length);

    it ("size of deck",function() {
        //assert.equal((g.getMazo().getMazo()).length,34);
        expect(g.getMazo().getMazo().length).to.equal(34);
    })
})
