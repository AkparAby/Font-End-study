//假定
//需求：希望每个路由得到请求到达服务器的时间

const express = require("express");

const app = express();
/*
 中间件的作用
多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添
加自定义的属性或方法，供下游的中间件或路由进行使用。
*/

//用app.use()注册一个全局生效的中间件
app.use((req, res, next) => {
  //获取到请求到达服务器的时间
  const time = Date.now();
  //为req对象挂载自定义属性，从而把时间共享给后面的所有中间件或路由
  req.arrivalTime = time;
  //把流转关系交给下一个中间件或路由
  next();
});

//挂载（简单）路由
app.get("/", (req, res) => {
  
  res.send(`Home page  ${req.arrivalTime}`);
});

app.get("/user", (req, res) => {
  
  res.send(`User page  ${req.arrivalTime}`);
});

app.listen(80, () => {
  console.log(`http://127.0.0.1`);
});
