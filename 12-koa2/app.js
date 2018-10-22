//koa2 
const Koa = require('koa');
const router = require('koa-simple-router');
const app = new Koa();

// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });


app.use(router(_ => {
	_.get('/',(ctx,next) => {
		ctx.body = 'hello';
	})
}));

app.listen(3000,() => {
	console.log('server started');
});