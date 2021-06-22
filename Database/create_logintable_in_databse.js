let con = require('./connection_online_database');


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), email VARCHAR (100), password VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    // if I want to change table:  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

});