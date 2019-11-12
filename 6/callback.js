//sync
/*
var fs = require('fs');

var data = fs.readFileSync('data.txt');

console.log(data.toString());

*/

//async
var fs = require('fs');

fs.readFile('data.txt', function(err,data){
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
})

console.log("server is done");







