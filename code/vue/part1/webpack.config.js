const path = require("path");

//为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以安装并配置 clean-webpack-plugin 插件
//左侧的花括号是解构赋值
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//1.导入html-web-pack-plugin 插件
const HtmlPlugin = require("html-webpack-plugin");
//2.new 构造函数创建插件实例对象
const htmlPlugin = new HtmlPlugin({
  //指定要复制哪个页面
  template: "./src/index.html",
  //指定复制出来的文件名和文件地址
  filename: "./index.html",
});

module.exports = {
  //webpack 运行的模式  可选值有两个 development 和 production
  mode: "development",
  //mode: "production",

  //自定义打包的入口与出口
  entry: path.join(__dirname, "./src/index.js"), //打包入口文件路径
  output: {
    path: path.join(__dirname, "./dist"), //输出文件存放的路径
    filename: "js/main.js", //输出文件名
  },

  //3.插件的数组,将来 webpack 在运行时 会加载并调用这些插件
  plugins: [htmlPlugin, new CleanWebpackPlugin()],

  //节点
  devServer: {
    open: true, //初次打包完自动打开浏览器
    // host: "127.0.0.1", //指定实时打包所使用的主机地址
    // port: 80, //实时打包所使用的端口号  在http协议中 端口号是80，则可以被省略
  },

  module: {
    //所有第三方模块的匹配规则
    rules: [
      //定义了不同模块对应的loader
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      //处理less文件的loader
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },

      //处理图片文件的loader  url 路径相关的文件
      //limit指定图片大小，大图片不转换；
      //多个属性之间用 & 符号进行分隔
      { test: /\.jpg|png|gif$/, use: "url-loader?limit=220&outputPath=images" },

      //使用 bablel-loader 处理高级JS语法
      //配置babel-loader 时程序员只需转换自己的代码 ,一定要排除 node_modules 目录中的JS文件 第三方包的兼容性无需关心
      /* { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }, */
    ],
  },
};
