var http = require('http');

http.createServer(function(req,res){
	//head
	res.writeHead(200,{'Content-Type':'text/plan'});

	//send
	res.end('Hello world!\n');
}).listen(8000);

console.log('server is start');



