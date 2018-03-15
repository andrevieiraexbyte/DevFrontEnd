var http = require ('http');

var server = http.createServer(function(request,response){
	res.end("<html><body><h1>Listando os produtos</h1></body></html>")
});

server.listen(3000);

console.log("Servidor ta Rodando")


