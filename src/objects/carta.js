Carta.prototype.weight = {
    "Copa":   [ 8, 9, 9, 1, 2, 3,  4, 0, 0, 5, 6, 7],
    "Espada": [14, 9, 9, 1, 2, 3, 11, 0, 0, 5, 6, 7],
    "Oro":    [ 8, 9, 9, 1, 2, 3, 10, 0, 0, 5, 6, 7],
    "Basto":  [13, 9, 9, 1, 2, 3,  4, 0, 0, 5, 6, 7]
};
Carta.prototype.palo;
Carta.prototype.numero;
Carta.prototype.peso;

function Carta(number,suit) {
    this.palo = suit;
    this.numero = number;
    //console.log('create a new card ',this);
    var aux = this.weight[suit]
    console.log(aux);
    this.peso = this.weight[suit];
}


Carta.prototype.getPeso = function() {return this.peso;}
Carta.prototype.getPalo = function() {return this.palo;};
Carta.prototype.getNumero = function() {return this.numero;};

Carta.prototype.setPalo = function(p) {
    this.palo = p;
    if (!(this.numero === undefined)) {
        this.peso = this.getPeso();
    }
}
Carta.prototype.setNumero = function(n) {
    this.numero = n;
    if (!(this.palo === undefined)) {
        this.peso = this.getPeso();
    }
}

Carta.prototype.getPuntos = function() {
    if(this.getNumero()<10)
        {return this.numero;}
    else
        {return 10;}
}

module.exports.carta = Carta;
