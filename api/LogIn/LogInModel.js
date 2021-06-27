let con = require('../../Database/connection_online_database');








class LogInModel {

    static getUser() {

        return new Promise(function (resolve, reject) {
            con.query(" SELECT * FROM meme_user", function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    }



    static findUsersById(id) {
        return new Promise(function (resolve, reject) {
            let sql = "SELECT  *  FROM meme_user WHERE id = ?";
            let values = [parseInt(id)];
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    }


    static createUser(user) {
        //  console.log("meme arrived"+ meme);
        return new Promise(function (resolve, reject) {
            let sql = "INSERT INTO meme_user (nickname, email, password) VALUES (?, ?, ?)";
            let values = [user.nickname, user.email, user.password];
            //Treiber ersetzt ? durch Values
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve("1 record inserted");
            });
        });
    }





}

module.exports = LogInModel;
