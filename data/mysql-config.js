//mysql配置文件
let mysql = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'www',
    multipleStatements: true,  // 允许批量

} //好了，这样我们就能连接数据库了

module.exports = mysql; //用module.exports暴露出这个接口，
