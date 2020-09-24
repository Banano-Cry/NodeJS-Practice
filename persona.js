const emitter = require('events').EventEmitter;
const util = require('util');

var persona = function(nombre){
	this.nombre = nombre;
}

util.inherits(persona, emitter);
module.exports = persona;
