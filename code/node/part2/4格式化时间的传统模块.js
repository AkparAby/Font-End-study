//导入格式化时间的传统模块
const TIME = require("./5dataFomat");

//调用方法，进行时间的格式化
const dt = new Date();
//console.log(dt);
const DT = TIME.dataFomat(dt);
console.log(DT);
