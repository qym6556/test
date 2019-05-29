function Tree(){
	return new Proxy({},handler);
}
const handler = {
	get(target,key,receiver){
		console.log(target);
		if(!(key in target)){
			target[key] = Tree();
		}
		return Reflect.get(target,key,receiver);
	}
}
let tree = Tree();
tree.qym.info.name = '卿耀民';
console.log(tree);

















