# webpack 概念

> webpack 是前端工程化的具体解决方案
>
> ## 1.主要功能：
>
> > 提供了友好的前端模块化开发支持，以及源代码压缩混淆、处理浏览器端 JavaScript 的兼容性、性能优化等功能（如：将 let 变量、箭头函数等高级有兼容性的 ES 语法代码转换为低级没有兼容性的代码）
>
> 作用：让程序员把工作的重心放在具体功能的实现上，提高了前端开发效率和项目的可维护性

> ## 2.webpack 的基本使用
>
> ### 配置 webpack
>
> 1. 在项目根目录中，创建名为 webpack.config.js 的 webpack 配置文件，并初始化如下的基本配置：

```js
module.exports = {
    //webpack 运行的模式  可选值有两个 development 和 production

    mode:'development'
    mode:'production'

    /* mode 节点的可选值有两个，分别是：
    1. development
    ⚫ 开发环境
    ⚫ 不会对打包生成的文件进行代码压缩和性能优化
    ⚫ 打包速度快，适合在开发阶段使用
    2. production
    ⚫ 生产环境
    ⚫ 会对打包生成的文件进行代码压缩和性能优化
    ⚫ 打包速度很慢，仅适合在项目发布阶段使用 */
}
```

>

> 2. 在 package.json 的 scripts 节点下，新增 dev 脚本如下：

```js
"scripts": {
   "dev":"webpack" //script节点下的脚本,可以通过 npm run 来运行 例如 npm run dev
  }
```

> 3. 在终端中运行 npm run dev 命令，启动 webpack 进行项目的打包构建

> ## 3. webpack.config.js 文件的作用
>
> - webpack.config.js 是 webpack 的配置文件。webpack 在真正开始打包构建之前，会先读取这个配置文件，从而基于给定的配置，对项目进行打包。
> - 注意：由于 webpack 是基于 node.js 开发出来的打包工具，因此在它的配置文件中，支持使用 node.js 相关的语法和模块进行 webpack 的个性化配置。

> ## 4.webpack 中的默认约定
>
> - 在 webpack 4.x 和 5.x 的版本中，有如下的默认约定：
>   > 1.  默认的打包入口文件为 src -> index.js
>   > 2.  默认的输出文件路径为 dist -> main.js
> - 注意：可以在 webpack.config.js 中修改打包的默认约定
>
> ### 4.1 自定义打包的入口与出口
>
> - 在 webpack.config.js 配置文件中，通过 entry 节点指定打包的入口。通过 output 节点指定打包的出口。示例代码如下:

```js
const path = require("path"); //导入node.js中专门操作路径的模块
module.exports = {
  entry: path.join(__dirname, "./src/index.js"), //打包入口文件路径
  output: {
    path: path.join(__dirname, "./dist"), //输出文件存放的路径
    filename: "main.js", //输出文件名
  },
};
```

> ## 5.webpack 中的插件
>
> ## webpack 插件的作用
>
> - 通过安装和配置第三方的插件，可以拓展 webpack 的能力，从而让 webpack 用起来更方便。最常用的 webpack 插件有如下两个：
>
> 1.  webpack-dev-server
>     > - 类似于 node.js 阶段用到的 nodemon 工具
>     > - 每当修改了源代码，webpack 会自动进行项目的打包和构建
> 2.  html-webpack-plugin
>     > - webpack 中的 HTML 插件（类似于一个模板引擎插件）
>     > - 可以通过此插件自定制 index.html 页面的内容。

> ## 5.1.1 安装 webpack-dev-server

```
npm install webpack-dev-server -D
```

> ### 5.1.2 配置 webpack-dev-server
>
> 1. 修改 package.json -> scripts 中的 dev 命令如下：

```js
"scripts": {
   "dev":"webpack serve" //script节点下的脚本,可以通过 npm run 来运行 例如: npm run dev
  }
```

> 2.  再次运行 npm run dev 命令，重新进行项目的打包
> 3.  在浏览器中访问 http://localhost:8080 地址，查看自动打包效果
> 4.  将前端页面 script 导入文件修改为 :

```
<script src="http://localhost:8080/main.js"></script>

```

> ### 5.1.3 打包生成的文件哪儿去了？
>
> 1. 不配置 webpack-dev-server 的情况下，webpack 打包生成的文件，会存放到 **_实际的物理磁盘上_**
>    > - 严格遵守开发者在 webpack.config.js 中指定配置
>    > - 根据 output 节点指定路径进行存放
> 2. 配置了 webpack-dev-server 之后，打包生成的文件存放到了 **_内存中_**
>    > - 不再根据 output 节点指定的路径，存放到实际的物理磁盘上
>    > - 提高了实时打包输出的性能，因为内存比物理磁盘速度快很多

> ## 5.2 html-webpack-plugin
>
> - html-webpack-plugin 是 webpack 中的 HTML 插件，可以通过此插件自定制 index.html 页面的内容,将其存放在内存中。
>
> ### 5.2.1 安装 html-webpack-plugin

```
npm install html-webpack-plugin -D
```

> ## 5.2.2 配置 html-webpack-plugin

```js
//1. 在 webpack.config.js 中 导入html-web-pack-plugin 插件
const HtmlPlugin = require("html-webpack-plugin");
//2.new 构造函数创建插件实例对象
const htmlPlugin = new HtmlPlugin({
  //指定要复制哪个页面
  template: "./src/index.html",
  //指定复制出来的文件名和文件地址
  filename: "./index.html",
});

module.exports = {
  //3.插件的数组,将来 webpack 在运行时 会加载并调用这些插件
  plugins: [htmlPlugin],
};
```

> ### 5.2.3 解惑 html-webpack-plugin
>
> - 通过 html-webpack-plugin 插件复制到项目根目录中的 index.html 页面，也被放到了内存中
> - HTML 插件在生成的 index.html 页面，自动注入了打包的 main.js 文件

> ## 5.3 devServer 节点
>
> - 在 webpack.config.js 配置文件中，可以通过 devServer 节点对 webpack-dev-server 插件进行更多的配置，示例代码如下：

```js
 devServer: {
    open: true, //初次打包完自动打开浏览器
    host: "127.0.0.1", //实时打包所使用的主机地址
    port: 80, //实时打包所使用的端口号
  }
```

> - 注意：凡是修改了 webpack.config.js 配置文件，或修改了 package.json 配置文件，必须重启实时打包的服务器，否则最新的配置文件无法生效！

> # webpack 中的 loader
>
> ## 1.loader 概述
>
> - 在实际开发过程中，webpack 默认只能打包处理以 .js 后缀名结尾的模块。其他非 .js 后缀名结尾的模块，webpack 默认处理不了，需要调用 loader 加载器才可以正常打包，否则会报错！
>
> - loader 加载器的作用：协助 webpack 打包处理特定的文件模块。比如：
>   > - css-loader 可以打包处理 .css 相关的文件
>   > - less-loader 可以打包处理 .less 相关的文件
>   > - babel-loader 可以打包处理 webpack 无法处理的高级 JS 语法
>
> ## 2.打包处理 css 文件
>
> ### 2.1 安装处理 css 文件的 loader

```
npm i style-loader  css-loader -D
```

> ### 2.2 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
 module: {
    //所有第三方模块的匹配规则
    rules: [
      //定义了不同模块对应的loader
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
```

> - 其中，test 表示匹配的文件类型， use 表示对应要调用的 loader 注意：
>   > - use 数组中指定的 loader **_顺序是固定的_**
>   > - 多个 loader 的调用顺序是：**_从后往前调用_**

> ## 3.打包处理 less 文件
>
> ### 3.1 安装处理 less 文件的 loader

```
npm i less-loader less -D
```

> ### 3.2 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
 module: {
    //所有第三方模块的匹配规则
    rules: [
      //定义了不同模块对应的loader
      { test: /\.less$/, use: ["style-loader", "css-loader","less-loader"] },
    ],
  },
```

>

> ## 4.打包处理样式表中与 url 路径相关的文件
>
> ### 4.1 安装处理 url 路径相关的文件的 loader

```
npm i url-loader  file-loader -D
```

> ### 4.2 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
 module: {
    //所有第三方模块的匹配规则
    rules: [
      //定义了不同模块对应的loader
      { test: /\.jpg|png|gif$/, use: "url-loader?limit22229"},
    ],
  },
```

> - 其中 ? 之后的是 loader 的参数项：
>   > - limit 用来指定图片的大小，单位是字节（byte）
>   > - 只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片

> ## 5.打包处理 js 文件中的高级语法
>
> - webpack 只能打包处理一部分高级的 JavaScript 语法。对于那些 webpack 无法处理的高级 js 语法，需要借助于 babel-loader 进行打包处理。例如 webpack 无法处理下面的 JavaScript 代码:

```js
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
```

> ### 5.1 运行如下的命令安装对应的依赖包:

```
npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D
```

> ### 5.2 在 webpack.config.js 的 module -> rules 数组中，添加 loader 规则如下：

```js
 module: {
    //所有第三方模块的匹配规则
    rules: [
      //定义了不同模块对应的loader
      { test: /\.js$/, use: "babel-loader",exclude:/node_modules/},
    ],
  },
```

> ### 5.3 配置 babel-loader
>
> - 在项目根目录下，创建名为 babel.config.js 的配置文件，定义 Babel 的配置项如下：

```js
module.exports = {
  //声明babel可用的插件
  //将来,webpack 在调用babel-loader 的时候会先加载plugins 插件来使用
  plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
};
```

> - 详情请参考 Babel 的官网 https://babeljs.io/docs/en/babel-plugin-proposal-decorators

> # loadre 的调用过程
>
> ![图片](loader.png)

> # 打包发布
>
> ## 1. 为什么要打包发布
>
> - 项目开发完成之后，需要使用 webpack 对项目进行打包发布，主要原因有以下两点：
>
>   > 1.  开发环境下，打包生成的文件存放于内存中，无法获取到最终打包生成的文件
>   > 2.  开发环境下，打包生成的文件不会进行代码压缩和性能优化
>
> - 为了让项目能够在生产环境中高性能的运行，因此需要对项目进行打包发布
>
> ## 2. 配置 webpack 的打包发布
>
> - 在 package.json 文件的 scripts 节点下，新增 build 命令如下：

```js
"scripts": {
    "dev": "webpack serve ",
    "build":"webpack --mode production" //打包发布时 运行此命令
  },
```

> - --model 是一个参数项，用来指定 webpack 的运行模式。production 代表生产环境，会对打包生成的文件进行代码压缩和性能优化。
> - 注意：通过 --model 指定的参数项，会覆盖 webpack.config.js 中的 model 选项。

> ## 3. 把 JavaScript 文件统一生成到 js 目录中
>
> - 在 webpack.config.js 配置文件的 output 节点中，进行如下的配置：

```js
 entry: path.join(__dirname, "./src/index.js"),
   output: {
     path: path.join(__dirname, "./dist"),
     //明确告诉 webpack 把生成 main.js 放到 dist下 的 JS 目录中
     filename: "js/main.js", //输出文件名
  },
```

>

> ## 4. 把图片文件统一生成到 image 目录中
>
> - 修改 webpack.config.js 中的 url-loader 配置项，新增 outputPath 选项即可指定图片文件的输出路径：

```js
 { test: /\.jpg|png|gif$/, use: "url-loader?limit=220&outputPath=images" },
```

>

> ## 5. 自动清理 dist 目录下的旧文件
>
> - 为了在每次打包发布时自动清理掉 dist 目录中的旧文件，可以在 webpack.config.js 中安装并配置 clean-webpack-plugin 插件：

```
npm i clean-webpack-plugin -D
```

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //插件的数组,将来 webpack 在运行时 会加载并调用这些插件
  //将创建的实例挂载到 plugins
  plugins: [htmlPlugin, new CleanWebpackPlugin()],
};
```

> # Source Map
>
> ## 1. 生产环境遇到的问题
>
> - 前端项目在投入生产环境之前，都需要对 JavaScript 源代码进行压缩混淆，从而减小文件的体积，提高文件的加载效率。此时就不可避免的产生了另一个问题：对压缩混淆之后的代码除错（debug）是一件极其困难的事情
>
> 1. 变量被替换成没有任何语义的名称
> 2. 空行和注释被剔除

> ## 2. 什么是 Source Map
>
> - Source Map 就是一个信息文件，里面储存着位置信息。也就是说，Source Map 文件中存储着压缩混淆后的代码，所对应的转换前的位置。
> - 有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码，能够极大的方便后期的调试。

> ## 3. webpack 开发环境下的 Source Map
>
> - 在开发环境下，webpack 默认启用了 Source Map 功能。当程序运行出错时，可以直接在控制台提示错误行的位置，并定位到具体的源代码
>
> ### 3.1 默认 Source Map 的问题
>
> - 开发环境下默认生成的 Source Map，记录的是生成后的代码的位置。会导致运行时报错的行数与源代码的行数不一致的问题。
>
> ### 3.2 解决默认 Source Map 的问题
>
> - 开发环境下，推荐在 webpack.config.js 中添加如下的配置，即可保证运行时报错的行数与源代码的行数保持一致

```js
module.exports = {
  mode: "development",
  //eval-source-map 仅限在“开发模式”下使用，不建议在“生产模式”使用。
  //此选项生成的 Source Map能够保证 运行时的报错行数 与 源代码的行数 保持一致
  devtool: "eval-source-map",
};
```

> ## 4. webpack 生产环境下的 Source Map
>
> - 在生产环境下，如果省略了 devtool 选项，则最终生成的文件中不包含 Source Map。这能够防止原始代码通过 Source Map 的形式暴露给别有所图之人。
>
> ### 4.1 只定位行数不暴露源码
>
> - 在生产环境下，如果只想定位报错的具体行数，且不想暴露源码。此时可以将 devtool 的值设置为 nosources-source-map。
>
> ### 4.2 定位行数且暴露源码
>
> - 在生产环境下，如果想在定位报错行数的同时，展示具体报错的源码。此时可以将 devtool 的值设置为 source-map。
> - 采用此选项后：你应该将你的服务器配置为，不允许普通用户访问 source map 文件！

> ## 5. Source Map 的最佳实践
>
> ## 开发环境下：
>
> 1. 建议把 devtool 的值设置为 eval-source-map
> 2. 好处：可以精准定位到具体的错误行
>
> ## 生产环境下：
>
> 1. 建议关闭 Source Map 或将 devtool 的值设置为 nosources-source-map
> 2. 好处：防止源码泄露，提高网站的安全性

> # 实际开发中需要自己配置 webpack 吗？
>
> ## 不需要！
>
> - 实际开发中会使命令行工具（俗称 CLI）一键生成带有 webpack 的项目
> - 开箱即用，所有 webpack 配置项都是现成的！
> - 我们只需要知道 webpack 中的基本概念即可！
>

># 总结
>
> 1.  能够掌握 webpack 的基本使用
>     > 安装、webpack.config.js、修改打包入口
> 2.  了解常用的 plugin 的基本使用
>     > webpack-dev-server、html-webpack-plugin
> 3.  了解常用的 loader 的基本使用
>     > loader 的作用、loader 的调用过程
> 4.  能够说出 Source Map 的作用
>     > 精准定位到错误行并显示对应的源码
>     >
>     > 方便开发者调试源码中的错误
