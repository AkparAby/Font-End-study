//使用ES6导入jquery
import $ from "jquery";

//导入样式(在webpack 中一切皆模块，都可以通过ES6语法进行导入和使用)
//如果某个模块中,使用from接收到的成员为undefined ,则没有必要去接收 
import "./css/index.css"
import "./css/index.less"


//1.导入图片
import logo from "./images/logo.png"

//2.给 img 标签的 src 属性动态赋值
$(".box").attr("src",logo)


//定义入口函数
$(function () {
  //实现奇偶行变色
  $("li:odd").css("background-color", "red");
  $("li:even").css("background-color", "pink");
});

/* 
//1.定义了 名为 info 的装饰器
function info() {
  //2.为目标添加静态属性 info
  target.info = "Person info";
}

//3.为 Person 类 应用 info 装饰器
@info
class Person {}

//4.打印 Person 的静态属性 info
console.log(Person.info);
 */
