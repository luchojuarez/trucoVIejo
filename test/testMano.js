var expect = require ("chai").expect;


var moduloMano = require("../src/objects/mano.js");
var Mano = moduloMano.mano;

var moduloCarta = require("../src/objects/carta.js");
var Carta = moduloCarta.carta;

describe ("suma puntos bien",function() {
    var c1 = new Carta("Basto",11);
    var c2 = new Carta("Basto",5);
    var c3 = new Carta("Copa",10);
    var m = new Mano([c1,c2,c3]);
    it("dos primeras cartas",function() {
        expect(m.puntos()).to.equal(25);
    })

    it ("dos cartas que no suman puntos", function() {
        m.getCarta(0).setPalo("Copa");
        m.getCarta(0).setNumero(11);
        m.getCarta(1).setPalo("Basto");
        m.getCarta(1).setNumero(5);
        m.getCarta(2).setPalo("Espada");
        m.getCarta(2).setNumero(5);
        expect(m.puntos()).to.equal(5);
    })
    it ("mano con flor", function() {
        m.getCarta(0).setPalo("Oro");
        m.getCarta(0).setNumero(4);
        m.getCarta(1).setPalo("Oro");
        m.getCarta(1).setNumero(5);
        m.getCarta(2).setPalo("Oro");
        m.getCarta(2).setNumero(6);
        expect(m.puntos()).to.equal(31);
    })
    it ("mano con pocos puntos (una sola carta da los puntos)", function() {
        m.getCarta(0).setPalo("Oro");
        m.getCarta(0).setNumero(11);
        m.getCarta(1).setPalo("Basto");
        m.getCarta(1).setNumero(5);
        m.getCarta(2).setPalo("Espada");
        m.getCarta(2).setNumero(6);
        expect(m.puntos()).to.equal(6);
    })
})
