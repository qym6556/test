import Koa from 'koa';
import router from 'koa-simple-router';
import babel_po from 'babel-polyfill';
import babel_co from 'babel-core/register';
import co from 'co';
import render from 'koa-swig';
import initController from './controller/initController';
import serve from 'koa-static';
import CONFIG from './config/config';
const app = new Koa();

initController.init(app,router);

app.context.render = co.wrap(render({
	root: CONFIG.get('viewDir'),
	autoescape: true,
  	cache: 'memory', 
  	ext: 'html'
}));

app.use(serve(CONFIG.get('staticDir')));
app.listen(CONFIG.get('port'),function(){
	console.log("serve runing");
});









