const express = require("express");

const app = express();

/*
可以使用 app.use() 连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行
调用
*/

//定义第一个全局中间件
app.use((erq, res, next) => {
  console.log("这是第一个全局中间件");
  next();
});

//定义第二个全局中间件
app.use((req, res, next) => {
  console.log("这是第二个全局中间件");
  next();
});

//定义一个路由
app.get("/user", (req, res) => {
  res.send("Home page");
});

app.listen("80", () => {
  console.log(`http://127.0.0.1`);
});
