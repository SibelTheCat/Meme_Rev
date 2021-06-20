let con = require('./connection_online_database');


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE test (id INT AUTO_INCREMENT PRIMARY KEY, memeCategory VARCHAR(255), memeName VARCHAR (255), memePic VARCHAR(255), memeDescription VARCHAR (255), memeTag1 VARCHAR (255), memeTag2 VARCHAR (255), memeTag3 VARCHAR (255), PP INT)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });

    // if I want to change table:  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

});

