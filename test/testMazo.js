var expect = require ("chai").expect;
var assert = require ("chai").assert;


var moduloMazo = require("../src/objects/mazo.js");
var Mazo = moduloMazo.mazo;

var moduloJugador = require("../src/objects/jugador.js");
var Jugador = moduloJugador.jugador;

describe("Mazo",function() {
    var mazo = new Mazo();
    var player = new Jugador("Lucho");
    var mano = mazo.darCartas()
    player.setMano(mano);

    it("type of deck", function() {
        assert.typeOf(mazo.getMazo()[0], "{ Object (palo, numero) }");
    })

    it("size of mano", function() {
        expect(mano.length).to.equal(3);
    })

    it("size of deck", function() {
        expect(mazo.mix().length).to.equal(40);
    })
    it("size deck after the cards are dealt", function() {
        expect(mazo.mix().length).to.equal(37);
    })

    it("type of functions", function() {
        assert.typeOf(mazo.darCartas, 'function');
    })
    it ("length of things",function() {
        assert.equal(mazo.darCartas().length,3);
        assert.equal(mazo.mix().length,40);
    })
})
