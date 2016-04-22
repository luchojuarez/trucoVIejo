function Carta() {
    this.palo = "mamaaaaa";
    this.numero = "AAAAAAAAAAAAAAAAA";
}
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

function Mano() {
    Mano.prototype.carta1 = new Carta();
    Mano.prototype.carta2 = new Carta();
    Mano.prototype.carta3 = new Carta();
}

// Dada dos cartas retorna el los puntos que suman entre ambas
function puntosDeDosCartas(a,b) {
    var puntos=0;
    if (a.getPalo() == b.getPalo()) {
        puntos = 20;
        if (a.getNumero()<=7) {
            puntos += a.getNumero();
        }
        if (b.getNumero()<=7) {
            puntos += b.getNumero();
        }
    }
    //console.log(a.getPalo(), b.getPalo(), "=", a.getPalo() == b.getPalo() , puntos);
    return puntos;
}

// retorna los puntos de la mano actual (this)
Mano.prototype.puntos = function() {
    var p1 = puntosDeDosCartas(this.carta1,this.carta2);
    var p2 = puntosDeDosCartas(this.carta2,this.carta3);
    var p3 = puntosDeDosCartas(this.carta3,this.carta1);
    var puntos = Math.max(p1,Math.max(p2,p3));
    if (puntos == 0) {
        p1 = this.carta1.getNumero();
        p2 = this.carta2.getNumero();
        p3 = this.carta3.getNumero();
        if (p1 > 9 || isNaN(p1)) {p1 = 0;}
        if (p2 > 9 || isNaN(p2)) {p2 = 0;}
        if (p3 > 9 || isNaN(p3)) {p3 = 0;}
        puntos = Math.max(p1,Math.max(p2,p3));
    }
    return puntos;
}


module.exports.mano = Mano;
module.exports.carta = Carta;
