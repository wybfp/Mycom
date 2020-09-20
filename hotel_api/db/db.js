const mysql = require('mysql');

//建立连接
const conn = mysql.createConnection({
   host:'localhost',        //数据库地址
   user:'root',             //账号
    password: 'zhuhanyi',
    database: 'comdb'       //数据库名称
});

conn.connect();         //连接
module.exports = conn;