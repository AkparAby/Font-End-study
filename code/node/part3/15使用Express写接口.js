//导入express模块
const express = require("express");

//创建express服务器实例
const app = express();

//配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

//一定要在路由之前 配置cors 这个中间件 ，从而解决接口跨域问题
const cors=require('cors')
app.use(cors())

/*
cors 主要在服务器端进行配置，客户端无需做额外配置

cors通过配置一系列 http响应头来 解决跨域问题
*/
 


//导入路由模块
const router = require("./16apiRouter");

//把路由注册到 app 上
app.use('/api',router);//可把router 视为一个全局中间件



//调用app.listen 监听客户端请求并启动服务器
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
