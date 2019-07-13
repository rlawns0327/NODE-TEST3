var mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kimj0327',
  database : 'rlawns',
  port : '3307' // mysql이 2개 이상 설치되면 오류가 날 수 있어 정확한 포트 번호를 설정 
});
  
connection.connect();
  
connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});
  
connection.end();