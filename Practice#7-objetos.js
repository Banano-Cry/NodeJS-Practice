const emitter = require('events').EventEmitter;
const util = require('util');
var Persona = function(nombre){
	this.nombre = nombre;
}
/*
emitter.on('primer', (nombre) => {
	console.log("El nombre ingresado fue: " + nombre);
});
*/

//emitter.emit('primer','Mark');

util.inherits(Persona, emitter);
let persona = new Persona('Mark');
persona.on('hablar', (mensaje) => {
	console.log(util.format("%s: %s",persona.nombre,mensaje));
});
persona.emit('hablar','Hola, como estas?');
