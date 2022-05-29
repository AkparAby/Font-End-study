## 安装

```
npm install akself-tool

```

## 导入

```js
const akself = require("akself-tool");
```

## 格式化时间

```js
//调用dateFormate 对时间进行格式化
const dt = akself.dateFormat(new Date());
console.log(dt);
// 输出： 2022-04-17 15:10:13
```

## 转义 HTML 中的特殊字符

```js
//定义待转换的html字符串 htmlStr
const htmlStr = '<h1 title="abc"> 这是H1 标签 <span>1234&nbsp;<span></h1>';
//调用对应的方法进行转换
const str1 = akself.htmlEscape(htmlStr);

console.log(str1);
//输出  &lt;h1 title=&quot;abc&quot;&gt; 这是H1 标签 &lt;span&gt;1234&amp;nbsp;&lt;span&gt;&lt;/h1&gt;
```

## 还原 HTML 中的特殊字符

```js
//定义待还原的HTML特殊字符
const str =
  "&lt;h1 title=&quot;abc&quot;&gt; 这是H1 标签 &lt;span&gt;1234&amp;nbsp;&lt;span&gt;&lt;/h1&gt;";
//调用对应的方法进行转换
const str2 = akself.htmlUnEscape(str);

console.log(str);
//输出:  <h1 title="abc"> 这是H1 标签 <span>1234&nbsp;<span></h1>
```

## 开源协议

ISC
