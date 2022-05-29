//path模块是node官方提供的、用来处理路径的模块。它提供了一系列方法和属性满足用户需求

//06.1 路径拼接  
//path.join()方法  可把多个路径片段拼接为完整的路径字符串
//语法格式：path.join([...paths])

//参数：
//...paths<string>路径片段的序列
//返回值：string

//示例：

const path=require('path');


//注意 ../会抵消前面的路径(回退一次)
const pathStr1=path.join('/a','/b/c','../','/d') ;
console.log(pathStr1);

const pathStr2=path.join(__dirname,'/files/2.txt');
console.log(pathStr2);



console.log('-----------------------------------------');


//06.2 获取路径中的文件名
//path.basename()方法 可获取路径中的最后一部分
//语法格式：path.basename(path[,ext])

//参数：
//path<string> 必选参数，表示一个路径的字符串
//ext<string> 可选参数，表示文件的扩展名(传递第二个参数)
//返回：<string>表示路径中的最后一部分

const fpath='/a/b/c/index.html';

const fname=path.basename(fpath);
console.log(fname);  //输出文件带扩展名 index.html


const nameWithoutExt=path.basename(fpath,'.html')
console.log(nameWithoutExt);//输出 文件名无扩展名 index



console.log('-----------------------------------------');

//06.3 获取路径中的文件扩展名
//path.extname方法 获取路径中的文件扩展名
//语法格式：path.extname(path)

//参数：
//path<string> 必选参数，表示一个路径的字符串
//返回值：<string>,返回得到的扩展名字符串

const fext=path.extname(fpath);
 console.log(fext);




