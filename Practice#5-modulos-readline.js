var readline = require('readline');
var util = require('util');

var rl = readline.createInterface({
	output: process.stdout,
	input: process.stdin
});

/*rl.on('line',(line) => {
	console.log(`Enviado: ${line}`);
});*/

var persona = {
	nombre: '',
	comentarios: []
};

rl.question('Cual es tu nombre? ', (nombre) => {
	persona.nombre = nombre;
});

rl.on('line',(line) => {
	if(line.trim() === 'salir'){
		console.log(util.format("Te llamas %s y tus comentarios fueron: %j", persona.nombre, persona.comentarios));
			process.exit();
	}

	process.stdout.write('Escribe un comentario: ');
	//rl.setPrompt('Escribe un comentario: ');
	//rl.prompt();
	persona.comentarios.push(line.trim());
});
