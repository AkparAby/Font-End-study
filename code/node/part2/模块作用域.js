const m=require('./模块作用域test');//导入时会运行所导入的模块代码 


console.log(m);//输出 {} 空对象，无法访问模块作用域test模块中的私有成员 usrename 与 sayHello

/*
模块作用域的好处

防止了全局变量污染的问题

2. 向外共享模块作用域中的成员
1. module 对象
在每个 .js 自定义模块中都有一个 module 对象，它里面存储了和当前模块有关的信息
2. module.exports 对象
在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象。
使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。
*/



