const fs = require('fs');
var archivo = 'archivo.txt';
fs.access(archivo, fs.constants.F_OK, (err) => {
	console.log(`${archivo} ${err ? 'No existe' : 'existe'}`);
});

//Escribir en un archivo
var mensaje = '//Este es un mensaje';
fs.writeFile(archivo, mensaje, (err) => {
	if(err) throw err;
	console.log('Se ha escrito en el archivo');
});

var nuevaLinea = '\n//Este es otra linea de mensaje';
fs.appendFile(archivo,nuevaLinea, (err) => {
	if(err) throw ('No se pudo realizar');
	console.log('Se ha reescrito el mensaje');
});
