//fs.readFeil()方法
//fs.readFile(path[,options],callback);
//参数1：必选参数，字符串表示文件路径
//参数2：可选参数，表示以什么编码格式来读取文件
//参数3：必选参数，读取文件后的回调函数，拿到读取结果。

//1.导入fs模块
const fs=require('fs');

//2.调用fs.readFile方法
fs.readFile('readFile.txt','utf-8',function(err,dataStr){
    //2.1打印失败结果
    //若读取成功，err的值为null. 
    //若读取失败，则err的值为错误对象，dataStr的值为undefined.
    console.log(err);
    console.log('--------------------------');

    //2.2打印成功的结果 
    console.log(dataStr);
})