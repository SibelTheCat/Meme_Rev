let con = require('./connection_online_database');

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM memes", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});