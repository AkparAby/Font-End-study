//导入express模块
const express = require("express");

//创建express服务器实列
const app = express();

//导入node.js内置的 querystring 模块
const qs = require("querystring");

/*
手动模拟一个类似于express.urlencoded这样的中间件，解析post 提交的表单数据
*/

//这是解析表单数据的中间件
app.use((req, res, next) => {
  //定义中间具体的业务逻辑

  //定义变量，用来存储客户端发送过来的请求提数据
  let str = "";

  //监听req的 data 事件
  req.on("data", (chunk) => {
    str += chunk;
  });

  //监听req的 end 事件
  req.on("end", () => {
    //在str中存放的数据已经时完整的请求体数据

    //console.log(str);

    //TO Do：把字符串格式的请求数据，解析成对象格式
    const body=qs.parse(str);
    //console.log(body);
    req.body = body
    next()
  });
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

//调用app.listen()方法，指定端口号并启动服务器
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
