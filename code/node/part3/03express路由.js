//导入包
const express = require("express");

//创建Web服务器
const app = express();

/*
在 Express 中，路由指的是 客户端的请求 与 服务器处理函数 之间的 映射关系。
Express 中的路由分 3 部分组成，
分别是:请求的类型、请求的 URL 地址、处理函数

格式如下：

app.METHOD(PATH,HANDLER)

*/

//挂载路由（最简单的）
//匹配(监听)GET请求，且请求URL为'/'
app.get('/',function(req,res){
    res.send('Hi,its me!')
})

//匹配(监听)POST请求，且请求URL为'/'
app.post('/',function(req,res){
    res.send(`Whao,it is you!`)
})

/*
路由的匹配过程

每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
在匹配时，会按照路由的顺序进行匹配，如果 请求类型 和 请求的 URL  同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

路由匹配的注意点：
① 按照定义的先后顺序进行匹配
② 请求类型 和 请求的URL 同时匹配成功，才会调用对应的处理函数
*/



//启动服务器监听
app.listen(80, () => {
  console.log(`Express server running at http://127.0.0.1`);
});
