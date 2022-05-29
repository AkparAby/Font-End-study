const express = require("express");

const app = express();

/*
中间件使用的5个注意事项

1.一定要在路由之前注册中间件
2.客户端发送过来的请求，可以连续调用多个中间件进行处理
3.执行完中间件业务代码之后，不要忘记调用next()函数
4.为了防止代码逻辑混乱，调用next()后不要再写额外代码
5.连续调用多个中间件时，多个中间件之间共享req和res对象

*/

//定义一个最简单的中间件函数
/*
const mw = function (res, req, next) {
  console.log(`这是最简单的中间件`);

  //把流转关系交给下一个中间件或路由
  next();
};


全局生效的中间件
客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件 


//将mw注册为全局生效的中间件
app.use(mw) 

*/
//注册一个全局中间件的简化形式
app.use((req, res, next) => {
  console.log(`这是最简单的中间件`);
  next();
});

app.get("/", (req, res) => {
  res.send(`home page`);
});

app.get("/user", (req, res) => {
  console.log(`调用了/user这个路由`);
  res.send(`user page`);
});

app.listen(80, () => {
  console.log(`http://127.0.0.1`);
});
