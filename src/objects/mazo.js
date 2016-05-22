var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;

var suits = ['Oro', 'Copa', 'Espada', 'Basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

//Constructor
function Mazo () {
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
