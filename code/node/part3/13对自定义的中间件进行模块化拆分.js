//导入express模块
const express = require("express");

//创建express服务器实列
const app = express();

//1.导入自己封装的bodyParser中间件模块
const bodyParser = require("./14.custom-body-parser");


//2.将自定义的中间件定义为全局可用的中间件
app.use(bodyParser);

app.post("/user", (req, res) => {
  res.send(req.body);
});

//调用app.listen()方法，指定端口号并启动服务器
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
