var expect = require ("chai").expect;

var moduloMano = require("../src/objects/mano.js");
var Mano = moduloMano.mano;

/*var moduloMazo = require("../src/objects/mazo.js");
var Mazo = moduloMazo.mazo;
*/
var moduloCarta = require("../src/objects/carta.js")
var Carta = moduloCarta.carta;

describe ("suma puntos bien",function() {
    var m = new Mano();
    //var c1 = new Carta("Bas")
    it("dos primeras cartas",function() {
        m.carta1.setPalo("Basto");
        m.carta1.setNumero(11);
        m.carta3.setPalo("Basto");
        m.carta3.setNumero(5);
        expect(m.puntos()).to.equal(25);
    })
    it ("dos cartas que no suman puntos", function() {
        m.carta1.setPalo("Copa");
        m.carta1.setNumero(11);
        m.carta2.setPalo("Basto");
        m.carta2.setNumero(5);
        m.carta3.setPalo("Espada");
        m.carta3.setNumero(5);
        expect(m.puntos()).to.equal(5);
    })
    it ("mano con flor", function() {
        m.carta1.setPalo("Oro");
        m.carta1.setNumero(4);
        m.carta2.setPalo("Oro");
        m.carta2.setNumero(5);
        m.carta3.setPalo("Oro");
        m.carta3.setNumero(6);
        expect(m.puntos()).to.equal(31);
    })
    it ("mano con pocos puntos (una sola carta da los puntos)", function() {
        m.carta1.setPalo("Oro");
        m.carta1.setNumero(11);
        m.carta2.setPalo("Basto");
        m.carta2.setNumero(5);
        m.carta3.setPalo("Espada");
        m.carta3.setNumero(6);
        expect(m.puntos()).to.equal(6);
    })
})

/*describe("Mazo",function() {
    var m = new Mazo();
    it("size of deck", function() {
        expect(m.sorted().length).to.equal(40);
    })
})*/
