const fs = require('fs');
const readline = require('readline');

var i = readline.createInterface(process.stdin, process.stdout);

/*
i.question('Cual es tu nombre? ', (nombre) =>{
	fs.writeFile(`${nombre}.txt`, `${nombre} dijo:`,(err) => {
		if(err) throw err;
	});
	process.stdout.write('Que deseas escribir? \n');

	i.on('line',(line) => {
		if(line.trim() === 'salir'){
			i.close();
		}
		else{
		fs.appendFile(`${nombre}.txt`, line.trim()+'\n',(err) => {
			if(err) throw err;
		});
		}
	});
});
*/
i.question('Cual es tu nombre?', (nombre) => {
	var stream = fs.createWriteStream(`./${nombre}.txt`);
	stream.write(`Esto dijo ${nombre}: \n`);

	process.stdout.write('Que deseas escribir? \n');
	i.on('line',(line) => {
		if(line.trim() === 'salir'){
			stream.close();
			i.close();}
		else{
			stream.write(line.trim() + '\n');}
	});
});
