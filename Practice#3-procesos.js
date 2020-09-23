//process.stdout.write("Hola mundo\n");

//Fase 1 
/*
process.stdout.write("Dime tu nombre: ");
process.stdin.on('data', function(data){
	process.stdout.write(data.toString()); //No para de repetir el programa
}); 
*/

//Fase 2
/*
var nombre;
process.stdout.write("Dimer tu nombre: ");
process.stdin.on('data',function(data){
	nombre = data.toString().trim(); //trim() elimina los espacios y saltos de linea al principio y al final
	process.stdout.write(nombre);
	process.exit();
});
*/

//Fase 3
var preguntas = ['Cual es tu nombre? ', 'Cual es tu edad? ','Comida favorita? '];
var respuestas = [];
function pregunta(i){
	process.stdout.write(preguntas[i]);
}
process.stdin.on('data',function(data){
	respuestas.push(data.toString().trim());
	if(respuestas.length < preguntas.length){
		pregunta(respuestas.length);
	}
	else{
		process.exit();
	}
});


pregunta(0);
