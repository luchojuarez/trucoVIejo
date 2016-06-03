var expect = require ("chai").expect;

<<<<<<< HEAD

var moduloMano = require("../src/objects/mano.js");
var Mano = moduloMano.mano;

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
=======
var _ = require('lodash')
var moduloMazo = require("../src/objects/mazo.js");
var Mazo = moduloMazo.mazo;
var moduloCarta = require("../src/objects/carta.js");
var Carta = moduloCarta.carta;
var moduloMano = require("../src/objects/mano.js");
var Mano = moduloMano.mano;


describe ("Test de mano [(Oro,2),(Oro,7),(Espada,2)]",function() {
	var m = new Mano();
	m.addCarta(new Carta("Oro",2));
	m.addCarta(new Carta("Oro",7));
	m.addCarta(new Carta("Espada",2));
	it("Puntos deberian ser 29", function () {
		expect(m.puntos()).to.equal(29);
	});
	it("La segunda carta es 7 de oro", function () {
		var segundaCarta = m.jugarCarta(1);
		expect(segundaCarta.getNumero()).to.equal(7);
		expect(segundaCarta.getPalo()).to.equal("Oro");
	});
	it("Ahora la segunda carta es 2 de Espada", function () {
		var segundaCarta = m.jugarCarta(1);
		expect(segundaCarta.getNumero()).to.equal(2);
		expect(segundaCarta.getPalo()).to.equal("Espada");
	});
	it("Calcular los puntos de una mano sin 3 cartas tira error", function () {
		expect(m.puntos).to.throw(Error);
	})
})


describe ("Test de mano [(Oro,12),(Oro,11),(Espada,2)]",function() {
	var m = new Mano();
	m.addCarta(new Carta("Oro",12));
	m.addCarta(new Carta("Oro",11));
	m.addCarta(new Carta("Espada",2));
	it("Puntos deberian ser 20", function () {
		expect(m.puntos()).to.equal(20);
	});
})

describe ("Test de mano [(Oro,2),(Basto,7),(Espada,2)]",function() {
	var m = new Mano();
	m.addCarta(new Carta("Oro",2));
	m.addCarta(new Carta("Basto",7));
	m.addCarta(new Carta("Espada",2));
	it("Puntos deberian ser 7", function () {
		expect(m.puntos()).to.equal(7);
	});
})

describe ("Test de mano [(Oro,12),(Basto,12),(Espada,11)]",function() {
	var m = new Mano();
	m.addCarta(new Carta("Oro",12));
	m.addCarta(new Carta("Basto",12));
	m.addCarta(new Carta("Espada",11));
	it("Puntos deberian ser 0", function () {
		expect(m.puntos()).to.equal(0);
	});
})

describe ("Test mano con cartas de un mazo",function() {

	var m = new Mano();
	var d = new Mazo().sorted();

	it("Primeras 3 cartas de un mazo ordenado",function () {
		m.robarMano(_.pullAt(d,0,1,2));
		expect(m.cartas).to.not.be.empty;
		console.log(m.cartas);
	})
	it("Siguientes 3 cartas del mismo mazo", function () {
		m.robarMano(_.pullAt(d,0,1,2));
		expect(m.cartas).to.not.be.empty;
		console.log(m.cartas);
	})

	var d2  = new Mazo().sorted();
	var m2 = new Mano();

	it("Simulacion de 2 manos robando cartas de un mazo ordenado", function () {
		m.robarMano(_.pullAt(d2,0,2,4));
		m2.robarMano(_.pullAt(d2,0,1,2));
		expect(m.cartas).to.have.lengthOf(3);
		expect(m2.cartas).to.have.lengthOf(3);
		console.log(m.cartas);
		console.log(m2.cartas);
	})
});
>>>>>>> ba348e94e15967b9278452d76ccce49b5d1ce481
