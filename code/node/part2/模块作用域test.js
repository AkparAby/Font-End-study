//模块作用域中定义常量 “任小姐”
const username = "任小姐";

const age = "20";

//模块作用域中定义方法 sayHello()
function sayHello() {
  console.log(`Hello ${username} !`);
}

//在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。

module.exports.username = "zs";//直接挂载新对象

module.exports.sayHello1 = function () {
  console.log("hello");
};                              //直接挂载新方法

module.exports.age = age;

//让module.exports 指向一个全新的对象
//使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。
module.exports = {
  nickname: '小黑',
  sayHi() {
    console.log("Hi!");
  },
};
