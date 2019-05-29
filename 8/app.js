var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// app.get('/index/:id',function(req,res){
// 	res.send('Hello World');
// 	res.json({
// 		id:'hello'+req.params.id
// 	});
// 	res.render()
// });
// app.post('/',function(){

// });

var urlencodedParser = bodyParser.urlencoded({
 extended: false 
});

app.use(express.static('public'));

app.get('/index',function(req,res){
	console.log("server started");
	res.sendFile(__dirname + "/views/index.html")
});
app.post('/index',urlencodedParser,function(req,res,next{
	res.redirect('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+req.body.data+'&rsv_pq=d68d87bc0004fb87&rsv_t=409d9q5FyXTmRLva8f1LvRA25kA1ag16IOw2w4ci6LFKo%2FpqNzzOpkgq%2BtQ&rqlang=cn&rsv_enter=1&rsv_sug3=4&rsv_sug1=3&rsv_sug7=100&rsv_sug2=0&inputT=822&rsv_sug4=823&rsv_sug=1')
	req.data = 123;
	next();
},function(req,res,next){
	console.log('通过中间件取到的值',req.data);
	res.send('end');
});

var server = app.listen(8081,function(){

	console.log('server run');
});












