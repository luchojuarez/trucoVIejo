var _ = require('lodash');
var moduloCarta = require("../objects/carta.js");
var Carta = moduloCarta.carta;


var suits = ['Oro', 'Copa', 'Espada', 'Basto'];
var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

//El objeto mazo tiene 2 funciones que retornar un arreglo de cartas, cada carta es generada con una combinacion entre suits y cardNumbers
function Mazo () {
}


//Output: Arreglo de @Object Carta, donde cada carta tiene los valores
//suits x cardNumbers (producto cartesiano)
Mazo.prototype.sorted = function(){
  return _.flatten( _.map(suits, function(suit){
                      return _.map(cardNumbers, function(number){
                        return new Carta(suit,number);
                      });
                    }));
};

//Output: Mezcla el arreglo obtenido con sorted y lo retorna
//Retorna un mazo mezclado
Mazo.prototype.mix = function(){
  return _.shuffle(this.sorted());
};

module.exports.mazo = Mazo;
