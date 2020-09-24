const persona = require('./persona');
const util = require('util');

let Alejandro = new persona('Alejandro');

Alejandro.on('habla', (mensaje) => {
	console.log(util.format('%s: %s',Alejandro.nombre,mensaje));
});

Alejandro.emit('habla','Hola me llamo Alejandro');
