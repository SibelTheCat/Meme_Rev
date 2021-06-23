

let con = require('../../Database/connection_online_database');
//var memesArray = [];

class MemesModel {
    static getMemes() {

        return new Promise(function(resolve, reject) {
            con.query("SELECT * FROM meme2", function(err, result) {
                if (err) throw err;
                resolve(result);
            });

        });
        //let memesArray = [];
        /*con.query("SELECT * FROM memes", function (err, result, fields) {
            if (err) throw err;

//https://www.tutorialkart.com/nodejs/nodejs-mysql-result-object/
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                memesArray.push(result[key]);
            });

        });*/
       // console.log(memesArray);


    }

    static findMemesById(id,) {
        let meme = memes.get(id);
        return meme;
    }


    static createMeme(meme) {
      //  console.log("meme arrived"+ meme);
        return new Promise(function(resolve, reject) {
            var sql = "INSERT INTO meme2 (memeCategory, memeName, memePic, memeDescription, memeTag1, memeTag2, memeTag3,PP_helper, PP) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)";
            let values = [meme.memeCategory, meme.memeName, meme.memePic, meme.memeDescription, meme.memeTag1, meme.memeTag2, meme.memeTag3,2, 0]
            //Treiber ersetzt ? durch Values
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve("1 record inserted");
            });
        });
    }


    static updateMemeById(meme) {
        return new Promise(function(resolve, reject) {
            var sql = "UPDATE meme2 SET PP = ? WHERE id = ?";
            //Treiber ersetzt ? durch Values
            let values = [meme.PP, meme.id]

            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve("meme updated");
            });
        });


    }
    static deleteMemeById(id) {

        return new Promise(function(resolve, reject) {

            //Sql Abfrage nach Category. Nach Where kommt Spalte
            const QUERY =   "DELETE FROM meme2 WHERE id = ?";

            con.query(QUERY, [id], function(err, result) {
                if (err) throw err;
                resolve("deleted meme with id:" +id);
            });

        });

        }
    static findMemesByCategory(category){

        return new Promise(function(resolve, reject) {

            //Sql Abfrage nach Ctegory. Nache Where kommt Spalte
            const QUERY =   "SELECT * FROM meme2 WHERE memeCategory = '"+category+"'";
            con.query(QUERY, function(err, result) {
                if (err) throw err;
                resolve(result);
            });

        });


}
}

module.exports = MemesModel;