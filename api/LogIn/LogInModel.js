

let con = require('../../Database/connection_online_database');
const user = require("express");

var userArray = [];

class LogInModel {
    static getUser() {
        //let memesArray = [];
        con.query("SELECT * FROM user ", function (err, result, fields) {
            if (err) throw err;

//https://www.tutorialkart.com/nodejs/nodejs-mysql-result-object/
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                userArray.push(result[key]);
            });

        });
        console.log(userArray);

        return userArray;
    }

    static findUserById(id,) {
        let user = user.get(id);
        return user;
    }


    static createUser(user) {

        var sql = "INSERT INTO user (id, name, email, password) VALUES (user.id, user.name, user.email, user.password)";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

      /*  memes.set(memeId.toString(), {

            memeCategory : meme.memeCategory,
            memeID: memeId,
            memeName : meme.memeName,
            memePic : meme.memePic,
            memeDescription : meme.memeDescription,
            memeTag1 :  meme.memeTag1,
            memeTag2 : meme.memeTag2,
            memeTag3 : meme.memeTag3,
            PP : 0,
        });*/
    }


    static updateUserById(id,user) {

        if (user.has(id.toString())) {
            user.set(id.toString(), {

                ID: user.ID,
                Name : user.name,
                email : user.email,
                password : user.password,

            });
            return true;
        }
        return  false;
    }

}

module.exports = LogInModel;