import Koa from "koa"
import config from './config'
import errorHandler from "./middwares/errorHandler.js"
import log4js from 'log4js';
import {createContainer,Lifetime} from 'awilix'
import {loadControllers,scopePerRequest} from 'awilix-koa';
import serve from "koa-static";
import render from "koa-swig";

log4js.configure({
	appenders: { 
		pp: { 
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
//创建IOC容器
const container = createContainer();
//每一次请求
app.use(scopePerRequest(container));
//装载所有的Service到容器里去
container.loadModules([__dirname+'/service/*.js'],{
	formatName:"camelCase",
	resolverOptions:{
		lifetime:Lifetime.SCOPED
	}
})




const logger = log4js.getLogger("cheese");
const app = new Koa();

errorHandler.error(app,logger);
routerInit.init(app,router);

app.use(loadControllers(__dirname+"/routes/*.js",{cwd:__dirname}))
app.listen(config.port,() => {
	console.log("server listening on"+config.port);
});





