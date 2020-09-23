var path = require("path");
var util = require("util");
var v8 = require("v8");
//process.stdout.write(path.basename(__dirname));
var nombre = 'Mark';
var edad = 20;
console.log(util.format("Hola %s, tienes %i años",nombre,edad));
console.log(path.join(__dirname,'www','img'));
console.log(v8.getHeapStatistics());
