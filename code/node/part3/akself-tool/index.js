//这是包的入口文件

const date = require('./src/dateFormat')
const escape=require('./src/htmlEscape')


//向外暴露需要的成员
module.exports = {
    ...date,//...ES6的展开运算符，这里将date对象上的所有属性展开交给另一个对象module.exports
    ...escape
};
