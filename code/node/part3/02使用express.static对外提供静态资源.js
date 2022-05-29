//导入express
const express = require("express");
const { join } = require("path");
const path = require("path");

//创建Web服务器
const app = express();

//在这里，调用express.static()方法，快速对外提供静态资源

//托管多个静态资源目录时，需调用多次。并且查找资源时从上向下查找，若在前面找到则不会继续向下查找

app.use("/file", express.static(path.join(__dirname, "./file"))); //挂载路径前缀 app.use('public',express.static('public'))

app.use(express.static(path.join(__dirname, "./clock")));

//启动Web服务器
app.listen(80, () => {
  console.log(`express server running at  http://127.0.0.1`);
});
