var source;
function init(){
	source = new EventSource('http://localhost/sse/data.php');
	source.onopen = function(){
		console.log("连接已建立",this.readyState);
	}
	source.onmessage = function(event){
		console.log("从服务器实时获取的数据",event.data);
	}
	source.onerror = function(){

	}
}
init();