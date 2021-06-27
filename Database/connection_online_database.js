const {DB_USER, DB_PASS, DB_HOST, DB_NAME} = require('./config_onlineDatabase');
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
});
con.connect();
module.exports = con;