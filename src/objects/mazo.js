Mazo.prototype.cartas;

var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;
Mazo.prototype.deck = [];

var suits = ['Oro', 'Copa', 'Espada', 'Basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

function Mazo () {
    Mazo.prototype.deck = this.mix();
}
Mazo.prototype.darCartas = function(){
    //splice es una funcion que dado sus dos parametros corta el arreglo (this)
    //retorna los elementos que tira y los saca del arreglo.
    return Mazo.prototype.deck.splice(0,3);
};

Mazo.prototype.getMazo = function() {
    return Mazo.prototype.deck;
}


Mazo.prototype.init = function () {
//Crea un mazo con las cartas correspondientes a suits y cardNumbers
    var c = suits.length * cardNumbers.length;
    var i,j;
    this.cartas = new Array(c);
    for (i=0;i< suits.length;i++) {
    	for (j=0;j < cardNumbers.length;j++) {
    		this.cartas[i*suits.length + j] = new Carta(suits[i],cardNumbers[j]);
    	}
    }
}

Mazo.prototype.cantCartas = function () {
//retorna la cantidad de elementos en cartas
    return this.cartas.length;
}


Mazo.prototype.sorted = function(){
  return _.flatten( _.map(suits, function(suit){
                      return _.map(cardNumbers, function(number){
                        return new Carta(suit,number);
                      });
                    }));
};

Mazo.prototype.mix = function(){
  return _.shuffle(this.sorted());
};

module.exports.mazo = Mazo;
