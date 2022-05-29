const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    //获取请求的 URL
    const url=req.url;
    let content='<h1 align="center">404 Not found!</h1>' //设置默认内容为404 Not found

    if(url==='/'||url==='index.html'){
        content='<h1 align="center">首页</h1>'
    }else if(url==='/about.html'){
        content='<h1>关于页面</h1>'
    }

    res.setHeader('Content-Type','text/html;charset=utf-8');//设置content-Type响应头 防止中文乱码

    res.end(content) //把内容发送给客户端
});

server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})