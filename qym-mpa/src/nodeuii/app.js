import Koa from "koa"
import config from './config'
import router from "koa-simple-router"
import routerInit from "./routes/routesInit.js"
import errorHandler from "./libs/errorHandler.js"
import log4js from 'log4js';
import path from 'path';
import serve from 'koa-static';
import render from 'koa-swig';
import co from 'co'

log4js.configure({
	appenders: { 
		cheese: { 
			type: 'file', 
			filename: __dirname + '/logs/qym.log'
		} 
	},
	categories: {
		default: { 
			appenders: ['cheese'], 
			level: 'error' 
		} 
	}
});

const logger = log4js.getLogger("cheese");
const app = new Koa();

app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

errorHandler.error(app,logger);
routerInit.init(app,router);

app.use(serve(config.staticDir))
console.log(config);
app.listen(config.port,() => {
	console.log("server listening on "+config.port);
});



