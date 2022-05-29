//导入express模块
const express = require('express')


//创建express服务器实列
const app = express()


//1.定义路由
app.get('/', (req, res) => {
    //1.1 认为的制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home page')
})

//2.定义错误级别的中间件，捕获整个项目中的异常错误，从而防止系统奔溃
app.use(function(err, req, res, next)  {
    console.log('发生了错误！' + err.message);
    res.send(`Erro: ${err.message}`)
})
/*
注意：
    错误级别的中间件必须注册在所有路由之后！否则无法工作
*/






//调用app.listen()方法，指定端口号并启动服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
})