var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
app.set('port',process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//WebSocket连接监听
io.on('connection',function(socket){
	socket.emit('open');//通知客户端已连接
	console.log(this);
	socket.on('message',function(msg){
		console.log('服务器接收到客户端的消息:'+msg);
		socket.emit('test','server ready');
	});
	socket.on('disconnect',function(){
		console.log('连接断开');
	});
})

//
app.get('/',function(req,res){
	res.sendFile(__dirname + '/views/index.html'); 
});


server.listen(app.get('port'),function(){
	console.log('socket server listening on port '+app.get('port'));
})