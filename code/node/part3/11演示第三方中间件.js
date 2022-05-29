//导入express模块
const bodyParser = require("body-parser");
const express = require("express");
//创建express服务器实例
const app = express();
//1.导入解析表单数据的中间件 body-parser
const parser=require('body-parser')

//2.使用app.use()注册中间件
app.use(parser.urlencoded({extended:false}))

app.post('/user',(req,res)=> {
  //默认情况下，如果不配置解析表单数据的中间件，则 req.body 默认等于undefined
  console.log(req.body);
  res.send("ok");
})


//调用app.listen()方法，指定端口号并启动服务器
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
