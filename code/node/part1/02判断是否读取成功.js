const fs=require('fs');

fs.readFile('./node/files/readFile.txt','utf-8',(err,dataStr)=>{
    if(err){
        return console.log('读取文件失败！'+err.message);
        //一定要带return出去，不再执行下面的代码
    }

    console.log('文件读取成功!'+dataStr);
})