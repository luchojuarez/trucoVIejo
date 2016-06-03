var expect = require ("chai").expect;
var assert = require ("chai").assert;

var moduloCarta = require("../src/objects/carta.js");
var Carta = moduloCarta.carta;

describe ("Carta",function() {
    var c1 = new Carta ("Espada", 1);
    var c2 = new Carta ("Oro", 1);
    it ("peso 1 de Espada",function() {
        expect(c1.getPeso()).to.equal(14);
    })
    it ("peso 1 de Oro",function() {
        expect(c2.getPeso()).to.equal(8);
    })

})
