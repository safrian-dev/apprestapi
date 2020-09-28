var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'rest_api_db',
});

conn.connect(function (err){
  if(err) throw err;
  console.log('Database terkoneksi!');
});

module.exports = conn;