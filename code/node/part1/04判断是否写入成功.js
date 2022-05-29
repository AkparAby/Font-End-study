const fs=require('fs');

fs.writeFile('./files/04.txt','害羞了吗？','utf-8',(err)=>{
    if(err){
       return console.log('写入失败！'+err.message);
    }
    console.log('写入成功！');
})