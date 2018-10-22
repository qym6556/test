//create eventsEmitter
var events = require('events');
var eventEmitter = new events.EventEmitter();



//bind 
var connctHandler = function(){
	console.log("connected is running");
}
eventEmitter.on('connection',connctHandler);


//trigger
eventEmitter.emit('connection');

console.log("done");
