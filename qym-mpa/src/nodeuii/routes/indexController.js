import IndexModel from '../models/IndexModel.js'
const indexController = {
	indexAction(){
		return async (ctx,next) => {
			const indexmodel = new IndexModel();
			const result = await indexmodel.getData();
			ctx.body = await ctx.render("index",{data:result});
		}
	}
	testAction(){
		return async (ctx,next) => {
			ctx.body = await ctx.render("index/text.html",{data:result});
		}
	}
}
export default indexController;