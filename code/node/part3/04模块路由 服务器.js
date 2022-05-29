const express = require("express");

//创建服务器实例
const app = express();

//挂载路由
//导入路由模块
const router = require("./04模块路由 路由块");

//注册路由模块
app.use(router);

//启动服务器
app.listen(80, () => {
  console.log(`http://127.0.0.1`);
});
