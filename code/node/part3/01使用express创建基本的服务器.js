//1.导入express
const express = require("express");
//2.创建Web服务器
const app = express();

//4.监听客户端的GET和POST请求
app.get('/user',(req,res)=>{
    //调用express提供的res.send()方法，向客户端响应一个json对象
    res.send({name:'任博涵',age:'20',prototype:'女朋友'})
})

app.post('/user', (req, res) => {
  //调用express提供的res.send()方法，向客户端响应一个文本字符串
  res.send("请求成功");
})

app.get('/',(req,res)=>{
  //通过req.query可以获取到客户端发送过来的 查询参数
  //req.query.name  req.query.age
  //注意：默认情况下，req.query是一个空对象
  console.log(req.query)
})

app.get('/user/:id',(req,res)=>{
  //req.params是动态匹配到的URL参数，默认是一个空对象
  console.log(req.params);
  res.send(req.params)
})


//3.启动Web服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
