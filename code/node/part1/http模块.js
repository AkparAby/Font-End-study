//http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务。

//调用 http.createServer() 方法，即可快速创建一个 web 服务器实例

//语法格式：const server=http.creatServer()

//1.导入http模块
const http=require('http');

//2.创建一个 web 服务器实例
const server=http.createServer();

//3.为服务器实例绑定 request 事件
server.on('request',(req,res)=>{
    //只要有客户端来请求我们自己的服务器就会触发request事件，从而调用事件处理程序
    console.log('Someone visit our web server');
})

//4.启动服务器
//调用服务器实例的 .listen(端口号，callback回调) 方法，即可启动当前的 web 服务器实例

server.listen(8080,()=>{
    console.log('http server running at http://127.0.0.1');
})
