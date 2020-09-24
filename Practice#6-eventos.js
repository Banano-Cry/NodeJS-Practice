const events = require('events');
const emitter = new events.EventEmitter();
const util = require('util');

//evento 1
emitter.on('primerEvento',(nombre,apellido) => {
	console.log('Su nombre es %s y su apellido %s',nombre,apellido);
});

emitter.emit('primerEvento','Mark','Kernogo');

//Evento 2
emitter.on('segundoEvento', (nombre) => {
	console.log('Solo se muestra su nombre: %s',nombre);
});

emitter.emit('segundoEvento','Mark');
console.log(emitter.eventNames());
console.log(emitter.getMaxListeners());
