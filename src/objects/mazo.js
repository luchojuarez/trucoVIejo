var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;
var deck = [];

var suits = ['Oro', 'Copa', 'Espada', 'Basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

function Mazo () {
    Mazo.prototype.deck = this.mix();
}
Mazo.prototype.darCartas = function(){
    //copio 3 cartas
    var carta1 = deck[0];
    var carta2 = deck[1];
    var carta3 = deck[2];
    //las saco del deck
    Mazo.prototype.deck.splice(0,3);
    //retorno las 3 cartas;
    return [carta1,carta2,carta3];
}

Mazo.prototype.getMazo = function() {
    return Mazo.prototype.deck;
}

// Mazo.prototype.sorted = function(){
//     var arreglo = new Array();
//     for (var suit = 0; suit < suits.length; i++) {
//         for (var number = 0; number < cardNumbers.length; i++) {
//             arreglo.push(new Carta(cardNumbers[number],suits[suit]));
//         }
//     }
//     console.log(arreglo);
//     return arreglo;
// }

Mazo.prototype.sorted = function(){
  return _.flatten( _.map(suits, function(suit){
                      return _.map(cardNumbers, function(number){
                        return new Carta(number, suit);
                      });
                    }));
};

Mazo.prototype.mix = function(){
  return _.shuffle(this.sorted());
};

module.exports.mazo = Mazo;
