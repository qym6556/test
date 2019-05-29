import indexController from './indexController.js';
const routesInit = {
	init(app,router){
		app.use(router(_ => {
			_.get('/',indexController.indexAction());
			_.get('/index',indexController.indexAction());
			_.get('/test',indexController.testAction());
			_.post('/name/:id',(ctx,next) => {
				//
			});
		}));
	}
}

export default routesInit;