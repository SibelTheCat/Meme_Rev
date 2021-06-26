let con = require('../../Database/connection_online_database');

class LowModel {

    static getMemeNoPic() {

        return new Promise(function (resolve, reject) {
            con.query(" SELECT id, memeCategory, memeName, memeDescription, memeTag1, memeTag2, memeTag3,PP_helper, PP FROM meme2;", function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    }

    static findMemePicById(id) {
        return new Promise(function (resolve, reject) {
            let sql = "SELECT memePic  FROM meme2 WHERE id = ?";
            let values = [parseInt(id)];
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    }

    static findMemes_low_ByTag() {

        let category = "pickle";

        return new Promise(function (resolve, reject) {

            //Sql Abfrage nach Ctegory. Nache Where kommt Spalte
            let sql = "SELECT id, memeCategory, memeName, memeDescription, memeTag1, memeTag2, memeTag3,PP_helper, PP  FROM meme2 WHERE memeTag1 = ? OR  memeTag2 = ? OR memeTag3 = ?";
            let values = [category, category, category];
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve(result);
            });

        });

    }

    static findMemes_low_ByCategory(category) {

        return new Promise(function (resolve, reject) {

            //Sql Abfrage nach Ctegory. Nache Where kommt Spalte
            let sql = "SELECT id, memeCategory, memeName, memeDescription, memeTag1, memeTag2, memeTag3,PP_helper, PP FROM meme2 WHERE memeCategory = '" + category + "'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                resolve(result);
            });

        });


    }






}

module.exports = LowModel;