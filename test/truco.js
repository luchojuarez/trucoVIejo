var expect = require ("chai").expect;

var moduloMano = require("../src/objects/mano.js");
var Mano = moduloMano.mano;

var moduloMazo = require("../src/objects/mazo.js");
var Mazo = moduloMazo.mazo;

var moduloCarta = require("../src/objects/carta.js")
var Carta = moduloMano.carta;

describe ("suma puntos bien",function() {
    var m = new Mano();
    it("dos primeras cartas",function() {
        m.carta1.setPalo("basto");
        m.carta1.setNumero(11);
        m.carta3.setPalo("basto");
        m.carta3.setNumero(5);
        expect(m.puntos()).to.equal(25);
    })
    it ("dos cartas que no suman puntos", function() {
        m.carta1.setPalo("copa");
        m.carta1.setNumero(11);
        m.carta2.setPalo("basto");
        m.carta2.setNumero(5);
        m.carta3.setPalo("espada");
        m.carta3.setNumero(5);
        expect(m.puntos()).to.equal(5);
    })
    it ("mano con flor", function() {
        m.carta1.setPalo("oro");
        m.carta1.setNumero(4);
        m.carta2.setPalo("oro");
        m.carta2.setNumero(5);
        m.carta3.setPalo("oro");
        m.carta3.setNumero(6);
        expect(m.puntos()).to.equal(31);
    })
    it ("mano con pocos puntos (una sola carta da los puntos)", function() {
        m.carta1.setPalo("oro");
        m.carta1.setNumero(11);
        m.carta2.setPalo("basto");
        m.carta2.setNumero(5);
        m.carta3.setPalo("espada");
        m.carta3.setNumero(6);
        expect(m.puntos()).to.equal(6);
    })
})
