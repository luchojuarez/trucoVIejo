var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;


var suits = ['Oro', 'Copa', 'Espada', 'Basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

function Mazo () {
//crear un nuevo mazo sin cartas
    cartas = this.mix();
}

Mazo.prototype.cartas;

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

Mazo.prototype.darCarta = function () {
//Obtener la primera carta del mazo, se modifica el arreglo cartas
    if (this.cartas.length > 0)
	return  this.cartas.shift();
    else
	return null;
}

Mazo.prototype.cantCartas = function () {
//retorna la cantidad de elementos en cartas
    return this.cartas.length;
}


Mazo.prototype.addCarta = function (carta) {
//agrega una carta al tope del mazo
    this.cartas.push(carta);
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
