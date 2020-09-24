const fs = require('fs');

/*fs.readFile('./carpeta/nuevo.txt','UTF-8', (err, archivo) => {
	if(err) throw err;
	console.log(archivo.length);
});*/

var stream = fs.createReadStream('./carpeta/nuevo.txt','UTF-8');

var data = '';

stream.once('data',()=>{
	console.log('Iniciando lectura');
});
stream.on('data', (chunk) => {
	console.log(chunk.length);
	data += chunk;
});
stream.on('end', ()=>{
	console.log('Termino lectura');
});
