import {route,GET,POST} from "awilix-koa";
@route("/")
class indexController {
	constructor({indexService}){
		this.indexService = indexService;
	}
	@route("/index")
	@GET()
	indexAction(){
		return async (ctx,next) => {
			const result = await this.indexService.getData();
			ctx.body = await ctx.render("index",{
				data:result
			})
		}
	}
}