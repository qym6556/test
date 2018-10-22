var express = require('express');
var app = express();

var swig = require('swig');
app.set('view engine','html');
app.engine('html',swig.renderFile);

app.use(express.static('public'));
app.get('/',function(req,res,next){
	res.render('index',{
		title:'首页文件',
		data:'Hello Express'
	});
});
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
function logErrors(err,req,res,next){
	console.log('记录日志',err.stack);
	next(err);
}
function clientErrorHandler(err,req,res,next){
	if(req.xhr){
		res.status(500).send({
			error:'Something blew up!'
		});
	}else{
		next(err);
	}
}
function errorHandler(err,req,res,next){
	res.status(500);
	res.end('error...')
}
app.listen(8081,function(){
	console.log('接口已启动');
})














