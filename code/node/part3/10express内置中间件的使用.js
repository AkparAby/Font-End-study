//导入express模块
const express = require("express");

//创建express服务器实列
const app = express();

//除了错误级别的中间件，其他的中间件必须在路由之前配置

//通过express.json()这个中间件，解析表单中的json格式数据
app.use(express.json());

//通过expres.urlencoded()这个中间件，解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false}));

//定义路由监听用户请求
app.post("/user", (req, res) => {
  //在服务器，可以使用req.body这个属性接受客户发送过来的请求数据
  //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.log(req.body);
  res.send("ok");
});

app.post("/book", (req, res) => {
  //在服务器，可以使用req.body这个属性接受客户发送过来的 json格式的表单数据 和 url-encoded格式的数据
  console.log(req.body);
  res.send("ok");
});

//调用app.listen()方法，指定端口号并启动服务器
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
