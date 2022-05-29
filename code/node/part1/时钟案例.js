//1.导入所需 fs path 模块

const fs=require('fs');
const { dirname, resolve } = require('path');
const path=require('path');

//匹配 <style></style>标签正则

const regStyle=/<style>[\s\S]*<\/style>/

//匹配<script></script>标签正则

const regScript=/<script>[\s\S]*<\/script>/

//2.使用fs模块读取需要被处理的html文件
fs.readFile(path.join(__dirname,'/files/index.html'),'utf-8',(err,dataStr)=>{
//2.1读取文件失败
    if(err){
        return console.log('读取文件失败！'+err.message)
    }

//2.2读取文件成功，成功后对应的方法解析出css、JS和HTML文件
resolveCSS(dataStr);
resolveJS(dataStr);
resolveHTML(dataStr);
})



//3.自定义resolveCSS方法
function resolveCSS(htmlStr){
    //3.1使用正则提取style
    /*regexObj.exec(str)语法
        参数: str 要匹配正则表达式的字符串。
        返回值:
        如果匹配成功，exec() 方法返回一个数组（包含额外的属性 index 和 input ），并更新正则表达式对象的 lastIndex 属性。完全匹配成功的文本将作为返回数组的第一项，从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本。

        如果匹配失败，exec() 方法返回 null，并将 lastIndex 重置为 0 。
    */ 
    const r1=regStyle.exec(htmlStr)
    //3.2进一步处理提取出来的样式
    const newCSS=r1[0].replace('<style>','').replace('</style>','')

    //3.4 将提取出来的样式写入新的.css文件
    fs.writeFile(path.join(__dirname,'/files/clock/index.css'),newCSS,'utf-8',(err)=>{
        if(err){
            return console.log('写入CSS样式失败！'+err.message);
        }
        console.log('成功写入CSS样式！');
    })

}



//4.自定义resolveJS方法
function resolveJS(htmlStr){
    //4.1 用正则提取 js
    const r2=regScript.exec(htmlStr)
    //4.2 进一步处理Script
    const newJS=r2[0].replace('<script>','').replace('</script>','')
    //4.3 将提取出来的JS写入新的JS文件
    fs.writeFile(path.join(__dirname,'/files/clock/index.js'),newJS,'utf-8',(err)=>{if(err){
        return console.log('写入JS脚本失败！'+err.message);
    }
    console.log('成功写入JS脚本！');})
}


//5.自定义resolveHTML方法
function resolveHTML(htmlStr){
    //5.1 使用replace方法 将内嵌的<style>、<script>替换为外联的<link>和<script>标签
    const newHTML=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace(regScript,'<script src="./index.js"></script>')

    //5.2 写入新的HTML文件
    fs.writeFile( path.join(__dirname,'/files/clock/index.html'),newHTML,'utf-8',(err)=>{if(err){
        return console.log('写入HTML文件失败！'+err.message);
    }
    console.log('成功写入HTML文件！');
    })
}
