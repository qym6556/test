/**
 * @fileOverview 实现index的数据模型
 * @author qym
 * 
 */

/**
 * IndexModel 类，生成一段异步的数据
 * @class 
 */


export default class IndexModel {
	/**
	 * [constructor description]
	 * @param  {string} app koa2的上下文环境
	 * @return {[type]}     [description]
	 */
	constructor(app){
		this.app = app;
	}
	/**
	 * [getData description]
	 * @return {Promise} 返回的异步处理结果
	 * @example
	 * return new Promise
	 * getData()
	 */
	getData(){
		return new Promise((resolve,reject) => {
			setTimeout(() => {
				resolve("Hello IndexAction")
			},1000);
		})
	}
}