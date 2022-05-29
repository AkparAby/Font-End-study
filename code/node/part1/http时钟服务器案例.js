//1导入模块
const fs=require('fs');
const path=require('path');
const http=require('http');

//2.创建服务器

//2.1创建web服务器实例
const server=http.createServer();

//2.2为服务器绑定request事件，监听客户端请求
server.on('request',(req,res)=>{
    //3.1获取客户端请求的url地址
    //   /clock/index.html
    //   /clock/index.js
    //   /clock/index.css

    const url=req.url;
    //3.2 把请求的url地址映射为本地具体文件存放路径

    // const fpath=path.join(__dirname,'/files',url)//本地文件路径后拼接所请求的url地址
    
    //5优化资源的请求路径
    //5.1设置空白的文件存放路径
    let fpath='';
    //5.2 判断用户请求的路径是否为'/',如果是则手动指定文件的存放路径
    if(url==='/'){
        fpath=path.join(__dirname,'/files/clock/index.html')
    }else{
    //5.3如果请求路径不为'/'，则动态拼接文件存放路径
        fpath=path.join(__dirname,'/files/clock',url)
    }

    

    //4读取文件内容并响应给客户端
    //4.1根据映射来的文件路径读取文件
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err){
           return res.end('<h1 align="center">404 Not Found!</h1>');//读取失败，固定的错误消息
        }
        res.end(dataStr);//读取成功，将成功的内容发送给客户端
    });

})

//2.3启动服务器
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})
