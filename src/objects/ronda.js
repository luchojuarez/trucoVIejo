var moduloJugador = require("../objects/jugador.js");
var Jugador = moduloJugador.jugador;

var moduloInterface = require("../objects/interface.js");
var Interface = moduloInterface.interface;

var valorEnvido = 2;
var valorEnvidoNoQuerido = 1;

Ronda.prototype.player1;
Ronda.prototype.player2;
Ronda.prototype.puntos1;
Ronda.prototype.puntos2;
Ronda.prototype.board;
Ronda.prototype.queEstaEnJuego; //Modela si se esta en juego el "Truco" o el "Envido"
Ronda.prototype.jugadaAnterior;

// se asume que el Player 1 es "mano"(es el primero en jugar en la ronda)
function Ronda(p1,p2) {
    this.player1=p1;
    this.player2=p2;
    this.puntos1=0;
    this.puntos2=0;
    this.queEstaEnJuego="Envido";
    var board1 = {cartas:[], name:p1.getName()}; //cartas en la mesa del jugador1;
    var board2 = {cartas:[], name:p2.getName()}; //cartas en la mesa del jugador2;
    this.board= [board1,board2];
};

Ronda.prototype.playARound = function(i) {
    var jugadaAnterior = undefined;
    var partidaFinalizada=false;
    var jugador = this.player1;
    var oponente = this.player2;
    for (var contador = 0; contador <10; contador++) {

    }
    while (!partidaFinalizada || i.isEmpty()) {
        partidaFinalizada=turno(jugador,oponente,i);
        var aux = jugador
        jugador=oponente;
        oponente=aux;

    }

    //retorna los puntos de cada jugador en un arreglo
    // resultado[0] puntos de player1
    // resultado[1] puntos de player2
    return [this.puntos1,this.puntos2];
};

// retorna true si la partida termino
function turno(jugador,oponente,i) {
    var jugada=jugador.play(i);

    console.log("jugada actual: ",jugada);
    // Si juego "Envido" o "Truco"
    if (jugada=="Truco"||jugada=="Envido") {
        this.queEstaEnJuego=jugada;
        this.jugadaAnterior=jugada;
        return false;
    }


    if (this.jugadaAnterior == "Envido" || this.jugadaAnterior == "Truco") {

        if (this.queEstaEnJuego=="Envido" && jugada=="Quiero") {
            console.log("                             SE JUEGA ENVIDO");
            this.queEstaEnJuego=undefined;
            // si el jugador pierde
            if (jugador.getMano().puntos()<oponente.getMano().puntos()) {
                asignarPuntos(oponente,valorEnvido);
            }
            if (jugador.getMano().puntos()>oponente.getMano().puntos()) {
                asignarPuntos(jugador,valorEnvido);
            }
            //Si tienen los mismos puntos gana el jugador "mano"
            if (jugador.getMano().puntos()==oponente.getMano().puntos()) {
                this.puntos1+=valorEnvido;
            }
            return false; //partida finalizo
        }
        if (this.queEstaEnJuego=="Envido" && jugada=="No Quiero") {
            // si el jugador pierde
            asignarPuntos(jugador,valorEnvidoNoQuerido);
            return true; //La partida finalizo
        }

        if (this.queEstaEnJuego=="Truco" &&  jugada=="Quiero") {
            return true;
        }

        if (this.queEstaEnJuego=="Truco" &&  jugada=="No Quiero") {
            console.log("                             NO SE JUEGA TRUCO");
            asignarPuntos(jugador,50);
            return true;
        }
    }
    //sino es un string es porque solo jugo una carta
    else {
        switch (jugada) {
            //el jugador actual canta truco
            case "Truco":
            return "Truco"
            break;

            //el jugador actual canta truco
            case "Envido":
            return "Envido"
            break;

            //el jugador actual juaga una carta
            default:


        }
    }
    this.jugadaAnterior=jugada;
}
function asignarPuntos(jugador,valor) {
    console.log(this.puntos2,this.puntos1,valor);
    if (jugador.getTipo()=="Mano"){
        this.puntos1=this.puntos1+valor;
    }
    if (jugador.getTipo()=="Pie"){
        this.puntos2=this.puntos2+valor;
    }
}


module.exports.ronda = Ronda;
