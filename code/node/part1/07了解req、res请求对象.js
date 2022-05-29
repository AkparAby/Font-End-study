const http=require('http');

const server=http.createServer();

//req是请求对象，包含了与客户端相关的数据和属性
server.on('request',(req,res)=>{
    //req.url 客户端请求的 URL地址
    const url=req.url
    //req.method 客户端请求的 method类型
    const method=req.method

    //const str=`Your request url is ${url},and request method is ${method}`

    const str=`您请求的URL地址是${req.url},请求的method类型是${req.method}`
    //为了防止中文显示乱码问题，需要设置响应头Content-Type的值为text/html；charset=utf-8

    res.setHeader('Content-Type','text/html; charset=utf-8')
    console.log(str);

    //调用res.end方法向客户端相应内容
    res.end(str)

    //
})

server.listen(80,()=>{
    console.log('server runing at http://127.0.0.1');
})