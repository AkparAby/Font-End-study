const express = require("express");

const app = express();

/*
不使用app.use()定义的中间件，叫做局部生效的中间件 
格式： 两种都可
app.get("/", mw1, mw2, (req, res) => {});

app.get("/", [mw1, mw2], (req, res) => {});

*/
//定义中间件函数
const mw1 = function (req, res, next) {
  console.log("调用了这个局部生效的中间件1");
  next();
};

const mw2 = function (req, res, next) {
  console.log("调用了这个局部生效的中间件2");
  next();
};

//创建路由
app.get("/", mw1, mw2, (req, res) => {
  res.send("Home page");
});

app.get("/user", (req, res) => {
  res.send("user page");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
