# 学习笔记
practice -projects

2018-8-13

## ES5核心技巧

1.变量提升和作用域

```javascript
alert(a);//function a(){}
var a = 2;
function a(){
    
}
function test(){
    var a=b=1;
}
alert(a);//a is not defind
alert(b);//undefind
```

2.按值传递和按引用传递

```javascript
function test(m){
    m = {
        v:10
    }
}
var m = {
    k:7
}
test(m);
console.log(m);//undefind    

```

3.this指向

```javascript
var a=20;
var p={
    a:10,
    init:function(){
        console.log(this.a);
        function t(){
            console.log(this.a);
        }
        t();
    },
    test:()=>{
        console.log(this.a);
    }
}
p.init();//10   20
p.test();//20
```

2018-08-19

## js语言精髓

```javascript
function fun (n, o){
	console.log(o);
	return {
		fun: function(m){
			return fun(m,n);
		}
	}
}
var a = fun(0);//undefind   {}
a.fun(1);// fun(1,0)        0       {}
a.fun(2);//fun(2,0)        0     {}
var b = fun(0).fun(1).fun(2).fun(3);//undefind  0  1 2
var c = fun(0).fun(1);//undefind 0
c.fun(2);//1
c.fun(3);//1
```

2018-08-21

## php和MySQL

```php
$GLOBALS['b'] = 'test';
session_start();
$_SESSION['view'] = 1;
header("Content-type:application/json;charset=utf-8");
$username = $_REQUSET['username'];

```

### 常见关键字

final:定义的东西不能改变，必须有值

static:

类::$静态属性          类::静态方法

self::$静态属性        self::静态方法

const

instanceof   判断是否指向对应类

### 异常处理

```php
class myException extends Exception{
    public function getInfo(){
        return $this -> getMessage();
    }
}
try{
    if($_GET['num']==1){
         throw new Exception("usr")；
    }else{
        throw new Exception("sys")
    }
   
}catch(Exception $e){
    echo $e -> getMessage();
    echo "错误文件为";
}catch(myException $e){
    echo $e -> getInfo();
}
```

数据库

工具：MySQL Workbench

mysql -uroot -p

show databases;

use db_test;   //改变默认数据库，db_test为你要用的数据库名





2018-08-26

## 测试

### 1.E2E测试 页面功能



### 2.接口测试 测API

​	全局执行命令行

​	把需要的的那个包文件写到js文件里 node执行它

​	mocha done 要记住

### 3.单元测试

npm install karma -g 

npm install karma -save--dev  //

karma //集成单元测试环境

karma init //初始化配置环境

karma.conf.js jasmine

phantom karma-phantomjs-launcher

karma-coverage //覆盖率检查

karma start

### 4.页面UI自动化测试

npm install -g yarn

sudo yarn global add backstopjs

backstop init

backstop test //注意图片的格式

### 5.性能测试   Benchmark.js

## node

### 1.阻塞与非阻塞

​	读取文件

​	fs模块，readFile()是异步读取，就是一种非阻塞，通过回调函数操作

​	readFileSync() 同步读取，阻塞

### 2.express

​	1.安装并引入express 启用一个express的实例

​	2.app listen一个端口 启动一个后台服务

​	3.app.get 设置基础的路由 然后吐出数据

​	4.平时的请求都是get浏览器 直接敲

​	5.get post put delete $.ajax->put

​	6.res操作：res.download()--提示下载文件，res.end()--终结，res.json()--发送一个JSON的响应，res.jsonp()--发送一个支持jsonp的json响应，res.redirect()--重定向请求，res.render()--渲染视图模板，res.send()--发送各种类型的响应，res.sendFile()--以八位字节流形式发送文件，res.sendStatus()--设置响应状态代码

### 3.express中间件

​	1.通过next(),连接，如果已经结束操作，如res.send，res.end，res.json等,后面中间件的客户端方法就无法运行了

### 4.koa

​	1.基础构建，内容会被自动识别，并改变返回的header:content-type

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
	ctx.body = 'Hello World';
	
});

app.listen(3000);
```

​	2.当一个中间件调用 `next()` 则该函数暂停并将控制传递给定义的下一个中间件。当在下游没有更多的中间件执行后，堆栈将展开并且每个中间件恢复执行其上游行为。

//备注：yii

### 5.nodejs部署上线

​	1.打开https://brew.sh/index_zh-cn.html

​	2.brew search nginx       brew install nginx

​	3.brew info nginx

​	4.nginx -v //查看nginx信息

​	5.sudo brew services start nginx(默认端口8080)

​	//如果你安装过Jenkins的话这里失效

​	sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist

​	systemctl start jenkins

​	6.sudo brew services stop nginx / nginx

​	7.nginx -s reload       nginx -s stop

​	8.打开Nginx具体安装目录 查看配置文件 /usr/local/etc/nginx/

​	9.验证配置文件 nginx -t -c 自己的配置文件地址

​	10.拷贝配置文件至Node项目目录  重新修改

​	11.服务器端的  nginx地址

### 6.nginx负载均衡

​	文件：nginx.conf

```tex
worker_processes 4;
events{
    worker_connections 1024;
}
http{
    upstream firsttest {
    	ip_hash;//可以记录用户ip，使得用户就访问一台服务器
        server 192.168.0.21 weight=2;//权重weight
        server 192.168.0.31;
    }
    server {
        listen 8080;
        location / {
            proxy_pass http://firsttest;
        }
    }
}
```



### 	





















