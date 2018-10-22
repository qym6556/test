var express = require('express');
var app = express();
var mysql = require('mysql');


app.use(express.static('public'));
//配置swig
var swig = require('swig');
app.set('view engine','html');
app.engine('html',swig.renderFile)
//
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'qym'
});
app.get('/',function(req,res,next){
	res.render('index',{
		title:'第一个Express小程序'
	});
});

app.get('/receive',function(req,res,next){
	console.log(req.query.username);
	var post = {
		username:req.query.username
	};
	var query = connection.query('INSERT INTO userinfo SET ?', post, function (error, results, fields) {
		if (error){
			res.json({
				success:'no',
				msg:'插入数据失败'
			});
		}else{
			res.json({
				success:'ok',
				msg:'插入数据成功'
			});
		}
	});
});




/*容错机制*/ 
app.get('*',function(req,res,next){
	res.status(404);
	res.end('404');
});
app.use(function(err,req,res,next){
	res.status(500);
	res.end('error...');
})
app.listen(3000,function(){
	console.log('Server is Diy');
});