var moduloQueue = require("../library/queue.js");
var Queue = moduloQueue.queue;

function Interface(mensajes){
    this.colaDeMensajes=mensajes;
}
Interface.prototype.mensaje;
//Interface.prototype.colaDeMensajes;

Interface.prototype.isEmpty = function() {
    this.colaDeMensajes.isEmpty();
}

Interface.prototype.setMensaje = function (mensaje) {
    this.mensaje=mensaje
};


Interface.prototype.pedirMensaje = function () {

    this.mensaje=mensaje
};

Interface.prototype.getMensaje = function () {
    return this.colaDeMensajes.dequeue();
};

module.exports.interface = Interface;
