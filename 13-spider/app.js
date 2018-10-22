const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
app.get('/',function(req,res){
	request('http://www.jikexueyuan.com',function(error,response,body){
		if(!error && response.statusCode == 200){
			$ = cheerio.load(body);//当前的$是一个拿到整个body的前端选择器
			res.json({
				'classNum':$('.aside-cList > li').length
			});
		}
	});
});

app.listen(3000,function(){
	console.log('Server running');
})	
