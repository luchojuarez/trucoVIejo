var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;


var suits = ['Oro', 'Copa', 'Espada', 'Basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Mazo () {
//crear un nuevo mazo sin cartas
    this.cartas = new Array();
//    prototype.mazo = sorted();
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

Mazo.prototype.mezclar = function () {
//mezclar las cartas del mazo intercambiando las cartas n=cartas.length veces 
    var temp;
    var j,k;
    for (j=0;j < this.cartas.length;j++) {
	k = Math.floor(Math.random()) * this.cards.length;
	temp = this.cartas[j];
	this.cartas[j] = this.cartas[k];
	this.cartas[k] = temp;
    }
}

Mazo.prototype.addCarta = function (carta) {
//agrega una carta al tope del mazo
    this.cartas.push(carta);
}

/*Mazo.prototype.sorted = function(){
  return _.flatten( _.map(suits, function(suit){
                      return _.map(cardNumbers, function(number){
                        return new Carta(number, suit);
                      });
                    }));
};
*/

module.exports.mazo = Mazo;
