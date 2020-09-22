console.log(process.argv);
function param(p){
	var index = process.argv.indexOf(p);
	//console.log(index);
	return process.argv[index + 1];
}

//console.log(param('--nombre'));
console.log(`Tu nombre es ${param('--nombre')} y tu edad es de ${param('--edad')}`);
