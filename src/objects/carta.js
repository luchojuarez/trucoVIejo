
function Carta() {
    this.palo = null;
    this.numero = null;
}

function Carta(palo,numero) {
    this.palo = palo;
    this.numero = numero;
    this.peso = null; //TODO getPeso(palo,numero) retorna el valor de la carta correspondiente 
}

Carta.prototype.peso;
Carta.prototype.palo;
Carta.prototype.numero;

Carta.prototype.getPalo = function() {return this.palo;};
Carta.prototype.getNumero = function() {return this.numero;};

Carta.prototype.setPalo = function(p) {this.palo = p;}
Carta.prototype.setNumero = function(n) {this.numero = n;}

Carta.prototype.getPuntos = function() {
    if(this.getNumero()<10){
        return this.numero;
    }
    else {
        return 10;
    }
}

module.exports.carta = Carta;
