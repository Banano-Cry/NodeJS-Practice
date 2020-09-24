const fs = require('fs');

//console.log(fs.readdirSync('./')); leer los archivos en la ruta dada de forma sincronica

fs.readdir('./',(error, files) => {
	if(error){
		throw error;
	}
	console.log(files);
});

//console.log(fs.readFileSync('./persona.js', 'UTF-8')); Leer un archivo de forma sincronica
fs.readFile('./persona.js','UTF-8', (error, archivo) => {
	if(error){
		throw error;
	}
	console.log(archivo);
});
	console.log('contenido del archivo');
