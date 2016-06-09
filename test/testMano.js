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
    //
    // var c1 = new Carta("Copa",11);
    // var c2 = new Carta("Basto",6);
    // var c3 = new Carta("Espada",5);
    // var m = new Mano([c1,c2,c3]);
    // it ("dos cartas que no suman puntos", function() {
    //     expect(m.puntos()).to.equal(5);
    // })
    //
    // var c1 = new Carta("Oro",11);
    // var c2 = new Carta("Oro",5);
    // var c3 = new Carta("Oro",5);
    // var m = new Mano([c1,c2,c3]);
    // it ("mano con flor", function() {
    //     expect(m.puntos()).to.equal(31);
    // })
    //
    // var c1 = new Carta("Oro",12);
    // var c2 = new Carta("Basto",5);
    // var c3 = new Carta("Espada",6);
    // var m = new Mano([c1,c2,c3]);
    // it ("mano con pocos puntos (una sola carta da los puntos)", function() {
    //     expect(m.puntos()).to.equal(6);
    // })
})
