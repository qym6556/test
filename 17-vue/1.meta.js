let p1 = {
	age : 12
}
const validator = {
	set(target,key,value){
		if (typeof value != 'number' || Number.isNaN(value)) {
			throw new TypeError("年龄必须是数字");
		}
	}
}

const proxy = new Proxy(p1,validator);
proxy.age = "lijsldi";















