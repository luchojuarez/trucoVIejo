var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;
var mazo = [];

var suits = ['oro', 'copa', 'espada', 'basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

function Mazo () {
//    Mazo.prototype.mazo = Mazo.sorted();
}
Mazo.prototype.darCartas = function(){
    return [1,2,3];
}
Mazo.prototype.repartir = function(){
    return [];
}

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
