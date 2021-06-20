

let con = require('../../Database/connection_online_database');
var memesArray = [];

class MemesModel {
    static getMemes() {
        //let memesArray = [];
        con.query("SELECT * FROM memes", function (err, result, fields) {
            if (err) throw err;

//https://www.tutorialkart.com/nodejs/nodejs-mysql-result-object/
            Object.keys(result).forEach(function(key) {
                var row = result[key];
                memesArray.push(result[key]);
            });

        });
        console.log(memesArray);

        return memesArray;
    }

    static findMemesById(id,) {
        let meme = memes.get(id);
        return meme;
    }


    static createMeme(meme) {

        var sql = "INSERT INTO memes (memeCategory, memeName, memePic, memeDescription, memeTag1, memeTag2, memeTag3, PP) VALUES (meme.memeCategory, meme.memeName, meme.memePic, meme.memeDescription, meme.memeTag1, meme.memeTag2, meme.memeTag3, 0)";
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


    static updateMemeById(id,meme) {

        if (meme.has(id.toString())) {
            meme.set(id.toString(), {

                memeCategory : meme.memeCategory,
                memeID: meme.memeID,
                memeName : meme.memeName,
                memePic : meme.memePic,
                memeDescription : meme.memeDescription,
                memeTag1 :  meme.memeTag1,
                memeTag2 : meme.memeTag2,
                memeTag3 : meme.memeTag3,
                PP : 0,

            });
            return true;
        }
        return  false;
    }
    static deleteMemeById(id) {

        return memes.delete(id);


    }
    static findMemesByCategory(category){

        let allMemes = this.getMemes();
        let memesCatArray = [];
        for (let meme of allMemes) {
         if(meme.memeCategory===category)
         { memesCatArray.push(meme);}
        }
        return memesCatArray;


}
}

module.exports = MemesModel;