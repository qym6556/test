window.test = function(num){
	if(num == 1){
		return 1;
	}else{
		return num + 1;
	}
	
}
class  PraiseButton{
	constructor(zan){
		this.zan = zan
	}
	like(){
		this.zan ++;
		console.log("点赞数为"+this.zan);
	}
}
class Thumb extends PraiseButton{
	constructor(zan){
		super(zan);
	}
	like(){
		this.zan++;
		console.log("大拇指为"+this.zan);
	}
}
const z = new Thumb(12);
z.like();