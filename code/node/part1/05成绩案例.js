const fs=require('fs');
const path=require('path');

fs.readFile(path.join(__dirname,'/files/成绩.txt'),'utf-8',(err,dataStr)=>{
    if(err){
        return console.log('文件读取失败！'+err.message);
    }
    //console.log('读取文件成功！'+dataStr);
    //1 先把成绩的数据按空格分割
    const arrOld=dataStr.split(' ');
    
    //2循环数组，对每项数据进行数据替换
    const arrNew=[];
    arrOld.forEach(element => {
        arrNew.push(element.replace('=','：'))
    });

    //3 把新数组中的每一项进行合并，得到一个新字符串
    const newStr=arrNew.join('\r\n');
    
    //4 把得到的新字符串写入 成绩-ok.txt 

   
    // 绝对路径 移植性、维护性差
     /* fs.writeFile('C:\\Users\\86152\\Desktop\\HJ\\node\\files\\成绩-ok.txt',newStr,'utf-8',(err)=>{
        if(err){
            return console.log('文件写入失败！'+err.message);
        }
        console.log('文件写入成功！');
     })*/


     // __dirname 表示当前文件所处的目录（路径）即可解决相对路径动态拼接和绝对路径不易维护等问题
     fs.writeFile(path.join(__dirname,'/files/成绩-ok.txt'),newStr,'utf-8',(err)=>{
        if(err){
            return console.log('文件写入失败！'+err.message);
        }
        console.log('文件写入成功！');
     })

}) 