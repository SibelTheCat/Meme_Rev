

let con = require('../../Database/connection_online_database');

class MemesModel {
    static getMemes() {

        //Promise Objekt wird erstellt
        //Die Parameter für ein Promises sind eine Funktion (im Konstruktor) die Funtktion
        //erstelle ich direkt im Konstruktor.
        //in der Funktion mache ich die Datenbankabfrage( con.query) dort gebe ich als Parameter die
        //Querey an und wieder eine Callbackfunktion.
        //Wenn die query abgeschlossen ist, wird die Callbackfunkton aufgerufen,
        //in der Callbackfunktion prüfe ich ob ein Fehler aufgetreten ist. Wwenn kein Fehler geworfen wird,
        //wird das Promise resolved.
        //wenn das Promise resolved ist, wird die Funktion aufgerfuen in MemesController, wo ich .then habe.
        //im result steht mein Abfrageergebnis als ein Array von rows.
        //in jeder Row stehen die Felder vom Table

        return new Promise(function (resolve, reject) {
            con.query("SELECT * FROM meme2", function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    }

    static findMemesById(id,) {
        return new Promise(function (resolve, reject) {
            let sql = "SELECT  *  FROM meme2 WHERE id = ?";
            let values = [parseInt(id)];
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });

    }


    static createMeme(meme) {
        //  console.log("meme arrived"+ meme);
        return new Promise(function (resolve, reject) {
            let sql = "INSERT INTO meme2 (memeCategory, memeName, memePic, memeDescription, memeTag1, memeTag2, memeTag3,PP_helper, PP) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)";
            let values = [meme.memeCategory, meme.memeName, meme.memePic, meme.memeDescription, meme.memeTag1, meme.memeTag2, meme.memeTag3, 2, 0];
            //Treiber ersetzt ? durch Values
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve("1 record inserted");
            });
        });
    }


    static updateMemeById(meme) {
        return new Promise(function (resolve, reject) {
            let sql = "UPDATE meme2 SET PP = ? WHERE id = ?";
            //Treiber ersetzt ? durch Values
            let values = [meme.PP, meme.id]

            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve("meme updated");
            });
        });


    }

    static deleteMemeById(id) {

        return new Promise(function (resolve, reject) {

            //Sql Abfrage nach Category. Nach Where kommt Spalte
            let sql = "DELETE FROM meme2 WHERE id = ?";

            con.query(sql, [id], function (err, result) {
                if (err) throw err;
                resolve("deleted meme with id:" + id);
            });

        });

    }

    static findMemesByCategory(category) {

        return new Promise(function (resolve, reject) {

            //Sql Abfrage nach Ctegory. Nache Where kommt Spalte
            let sql = "SELECT * FROM meme2 WHERE memeCategory = '" + category + "'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                resolve(result);
            });

        });


    }

    static findMemesByTag() {

        let category = "pickle";

        return new Promise(function (resolve, reject) {

            //Sql Abfrage nach Ctegory. Nache Where kommt Spalte
            let sql = "SELECT * FROM meme2 WHERE memeTag1 = ? OR  memeTag2 = ? OR memeTag3 = ?";
            let values = [category, category, category];
            con.query(sql, values, function (err, result) {
                if (err) throw err;
                resolve(result);
            });

        });

    }
}
module.exports = MemesModel;