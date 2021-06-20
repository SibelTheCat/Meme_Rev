const {DB_USER, DB_PASS, DB_HOST, DB_NAME} = require('./config_onlineDatabase');
let mysql = require('mysql2');

let con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
});

module.exports = con;