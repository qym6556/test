import item from './sync.css'
import {isArray} from 'lodash-es'
import help from '../common/index.js';
console.log(help.version);
const isArrayfn = (args) => {
	console.log(isArray(args));
};
const sync = () => {
	console.log("sync");
	fetch("/api/test")
	.then(response =>  response.json())
	.then(data => {
		console.log("fetch结果:"+data.msg);
	})
	.catch(err => {
		console.log(err);
		// navigator.sendBeacon("http://www.aa.com/a.gif?errinfo="+err);
	});
	setTimeout(function(){
		document.getElementById('app').innerHTML = `<h1 class="${item.test}">Hello World</h1>`
	},1000);
};
// export default sync
export {
	sync,
	isArrayfn
}