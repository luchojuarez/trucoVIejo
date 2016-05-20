/*Exporto librerias para test y modulo a testear*/
var expect = require ("chai").expect;
var assert = require ("chai").assert;

var moduloJugador = require("../src/objects/jugador.js");
var Jugador = moduloJugador.Jugador;

describe ("Player",function() {
    var p = new Jugador("Lucho");
    it("getName",function() {
        assert.typeOf(p.getName(), "String");
    })
})
