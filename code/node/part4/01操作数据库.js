//1.导入mysql模块
const mysql = require("mysql");

//2.建立与mysql数据库的关系
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的IP地址
  user: "root", //登录数据库的账号
  password: "admin123", //登录数据库的密码
  database: "my_db_01", //指定要操作那个数据库
});
/*测试muysql 模块是否可以正常工作  语句 select 1 没有实质性作用
db.query("select 1", (err, results) => {
  //mysql 模块工作期间报错了
  if (err) return console.log(err.message);
  //能够成功执行mysql语句
  console.log(results);
});*/

/* 
//查询users 表中所有的数据
const sqlStr = "select * from users"

db.query(sqlStr, (err,results) => {
    if (err) return console.log(err.message);
    console.log(results);
})
 */

//向users表中，插入一条数据，其中 username 为：Spider-Man  passw为：pcc123
const user = { username: "Spider-Man", password: "pcc123" };
//定义待执行的sql语句
const sqlStr = "insert into users(username,password) values(?,?)";
//执行SQL语句
db.query(sqlStr, [user.username, user.password], (err,results) => {
  //mysql 模块工作期间报错了
  if (err) return console.log(err.message);
  //成功了
  //如果执行的是insert　into　插入语句,则results是一个对象
  //可以通过　affectedRows属性，判断是否插入数据成功
  if (results.affectedRows === 1) {
    console.log("插入数据成功！");
  }
})
