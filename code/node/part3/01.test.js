const akself = require("./akself-tool");

//console.log(akself);

const DT = akself.dateFormat(new Date());
console.log(DT);

console.log("----------------------------------------------");
const htmlStr = '<h1 title="abc"> 这是H1 标签 <span>1234&nbsp;<span></h1>';

const str1 = akself.htmlEscape(htmlStr);
console.log(str1);

console.log("----------------------------------------------");

const str2 = akself.htmlUnEscape(str1);
console.log(str2);

