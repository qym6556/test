var express = require('express');
var app = express();
app.get('/index',function(req,res){
	res.send('Hello Express')
})
app.listen(8081,function(){
	console.log('接口已启动');
})