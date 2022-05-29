//fs.writeFile()方法
//fs.writeFile(file,data[,options],callback)

//参数1：必选参数，需指定一个文件路径的字符串，表示文件的存放路径。
//参数2：必选参数，表示要写入的内容。
//参数3：可选参数，表示以什么编码格式写入文件内容，默认UTF-8
//参数4：必选参数，文件写入后的回调函数。

const fs=require('fs');

fs.writeFile('./node/files/2.txt','这样任小姐会害羞呢','utf-8',(err)=>{
    //若写入成功，则err的值为null
    //若写入失败，则err的值为一个错误对象
    console.log(err);
})