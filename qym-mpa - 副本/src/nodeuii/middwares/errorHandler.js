const errorHandler = {
	error(app,logger){
		app.use(async(ctx,next){
			await next();
			if(404 != ctx.status) return;
			ctx.status = 404;
			logger.error("出错了")
			ctx.body ='<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="http://yoursite.com/yourPage.html" homePageName="回到我的主页"></script>'
		});
	}
}
export default errorHandler