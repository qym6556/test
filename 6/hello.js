console.log('hello world!');


function hello(){
	var name;
	this.setName = function(argName){
		name = argName;
	}
	this.sayHello = function(){
		console.log("hello " + name);
	}
}
module.exports = hello;