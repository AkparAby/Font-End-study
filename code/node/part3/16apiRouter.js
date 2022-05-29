const express = require("express")


const router = express.Router()


//挂载对应的路由
router.get("/get", (req, res) => {
    //通过 req.query 获取客户端通过 查询字符 ，发送到服务器的数据
    const query = req.query
    //调用res.send 向客户端响应处理的结果
    res.send({
        status: 0,             //0 表示处理成功，1表示处理失败
        msg: 'GET 请求成功',   //状态描述
        data: query            //需要响应给客户端的数据
    })
})

router.post("/post", (req, res) => {
    //通过 req.body 获取客户端请求体，发送到服务器的 url-encoded 数据
    const body = req.body
    //调用res.send()方法把数据响应给客户
    res.send({
        status: 0,               //0 表示处理成功，1表示处理失败
        msg: 'POST 请求成功！',  //状态消息
        data:body               //响应给客户端的具体数据
    });
})

router.delete('/delete', (req, res) => { 
    res.send({
      status: 0, //0 表示处理成功，1表示处理失败
      msg: "DELETE 请求成功！", //状态消息
    });
})

module.exports = router 