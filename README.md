# test
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

































