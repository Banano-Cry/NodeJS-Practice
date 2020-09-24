const http = require('http');

http.createServer((req,res) => {
	//res.writeHead(200, {'content-type': 'text/plain'});
	//res.end('Hola mundo');
	res.writeHead(200, {'content-type': 'text/html'});
	res.end('EJEMPLO 11 <HTML> <HEAD> <TITLE>Ejemplo 11</TITLE> </HEAD> <BODY> <P>Al final de este párrafo vamos a colocar una nota a pie de página, de modo que al pinchar sobre la llamada, vamos a la nota, y al pinchar sobre el número de nota en el pie de página, volvemos a la llamada. <A NAME="llamada_1"></A><A HREF="#nota1"><SUP>1</SUP></A><BR><P> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla, <BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla,<BR> Bla, <HR size="0"> <A NAME="nota_1"></A><A HREF="#llamada_1"><SUP>1</SUP></A><FONT SIZE="-1">Éste es el texto de la nota. Si pinchamos sobre el número, volvemos a la llamada.</FONT> </BODY> </HTML>');
}).listen(3000);

console.log('Servidor iniciando...');
