const Koa = require('koa');
const app = new Koa();

app.keys = ['Im a newer secret','i like it'];
app.use(async ctx => {
	ctx.body = 'Hello World';
	ctx.cookies.set('name','tobi',{signed:true});
	console.log(ctx.cookies.get('name'));
});

app.listen(3000,function(req,res){
	console.log('running');
});