//1.self 表示的是 serviceWorker 作用域 全局的变量
//2.caches 表示的缓存 
//skipWaiting 表示当前处在waiting 状态的脚本进入active状态
const cacheName = "qym-pwa-step-v1";
const filesToCache = [
	"/scripts/index.js",
	"/styles/index.css",
	"/"
];
//加入缓存列表，强制进行更新
function updateStaticCache(){
	return caches.open(cacheName).
	then(function(cache){
		return cache.addAll(filesToCache)
	})
	.then(() => self.skipWaiting());
}

self.addEventListener("install",(event) => {
	//装载缓存
	console.log("首次安装成功");
	event.waitUntil(updateStaticCache());
});

self.addEventListener("activate",(event) => {
	//更新缓存版本号
	console.log("激活成功");
	event.waitUntil(caches.keys().then(function(keyList){
		return Promise.all(keyList.map(function(key){
			console.log("【serviceWorker更换key】完毕");
			if(key !== cacheName){
				return caches.delete(key);
			}
		}))
	}));
});

//拦截到当前网站的全部请求
self.addEventListener("fetch",(event) => {
	//找到真正的缓存
	// event.respondWith(new Response("Hello World"));
	console.log("请求",event.request);
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
	);
});














