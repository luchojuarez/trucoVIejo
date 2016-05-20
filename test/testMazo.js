var expect = require ("chai").expect;
var assert = require ("chai").assert;


var moduloMazo = require("../src/objects/mazo.js");
var Mazo = moduloMazo.mazo;

describe("Mazo",function() {
    var m = new Mazo();
    it("size of deck", function() {
        expect(m.mix().length).to.equal(40);
    })
    // it("type of functions", function() {
    //     assert.typeOf(m.darCartas, 'function');
    //     assert.typeOf(m.repartir, 'function');
    // })
    it ("length of things",function() {
        //assert.equal(m.darCartas().length,3);
        assert.equal(m.mix().length,40);
    })
})
