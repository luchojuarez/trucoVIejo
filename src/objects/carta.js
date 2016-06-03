var weight = {
    "Copa":   [ 8, 9, 9, 1, 2, 3,  4, 0, 0, 5, 6, 7],
    "Espada": [14, 9, 9, 1, 2, 3, 11, 0, 0, 5, 6, 7],
    "Oro":    [ 8, 9, 9, 1, 2, 3, 10, 0, 0, 5, 6, 7],
    "Basto":  [13, 9, 9, 1, 2, 3,  4, 0, 0, 5, 6, 7]
    };

function Carta() {
    this.palo = null;
    this.numero = null;
    this.peso = weight[this.palo][this.numero-1]; 
}


function Carta(palo,numero) {
    this.palo = palo;
    this.numero = numero;
    this.peso = this.getPeso();
}
Carta.prototype.getPeso = function() {
    return this.peso;
}


Carta.prototype.peso;
Carta.prototype.palo;
Carta.prototype.numero;

Carta.prototype.getPalo = function() {return this.palo;};
Carta.prototype.getNumero = function() {return this.numero;};

Carta.prototype.setPalo = function(p) {
    this.palo = p;
    this.peso = weight[this.palo][this.numero-1]; 
}
Carta.prototype.setNumero = function(n) {
    this.numero = n;
    this.peso = weight[this.palo][this.numero-1]; 
}

Carta.prototype.getPuntos = function() {
    if(this.getNumero()<10){
        return this.numero;
    }
    else {
        return 0; //Las negras valen 0
    }
}

module.exports.carta = Carta;
