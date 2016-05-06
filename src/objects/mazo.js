var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;


var suits = ['oro', 'copa', 'espada', 'basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

function Mazo () {
    prototype.mazo = sorted();
}

Mazo.prototype.sorted = function(){
  return _.flatten( _.map(suits, function(suit){
                      return _.map(cardNumbers, function(number){
                        return new Carta(number, suit);
                      });
                    }));
};


module.exports.mazo = Mazo;
