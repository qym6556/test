function Promise(fn){
	var callback;
	this.then = function(done){
		callback = done;
	}
	function resolve(){
		callback();
	}
	fn(resolve);
}
function request(){
	return new Promise(function(resolve){
		resolve();
	});
}
request().then(function(data){
	console.log("成功了");
})