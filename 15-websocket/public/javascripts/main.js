$(function(){
	var i = 0 ;
	var socket = io.connect('http://localhost:3000');
	socket.on('open',function(){
		console.log('已连接');
		socket.send('连接成功');
	});
	socket.on('test',function(json){
		console.log('test',json);
	})
})