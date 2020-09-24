const fs = require('fs');


//Crear una carpeta
/*fs.mkdir('carpeta',(err) => {
	if(err) throw err;
	console.log('Se creo la carpeta');
});*/

//Cambiar nombre archivo
/*
fs.rename('archivo.txt','nuevo.txt', (err) => {
	if(err) throw err;
	console.log('el archivo ha sido modificado');
});
*/

//Mover un archivo
/*
fs.rename('nuevo.txt','./carpeta/nuevo.txt',(err) => {
	if(err) throw err;
	console.log('El archvio ha sido movido');
});
*/

//Copiar un archivo
/*
fs.copyFile('./carpeta/nuevo.txt','nuevo.txt',(err) => {
	if(err) throw err;
});
*/

//Eliminar un archivo
fs.unlink('nuevo.txt', (err) => {
	if(err) throw err;
	console.log('El archivo ha sido eliminado');
});

