const LowModel = require("./LowModel");


class LowController {
    static memes_low(req, res) {
        let memes = [];
        if(req.query.category === "meme of the day"){
            memes = LowModel.findMemes_low_ByTag();
        }
        else if (req.query.category) {
            memes = LowModel.findMemes_low_ByCategory(req.query.category);
        }
        else {
            memes = LowModel.getMemeNoPic();
        }
        //memes ist ein Promise
        //ein Objekt das mir etwas verpricht
        //die Funktion wird aufgerufen, wenn das Promise erfüllt ist
        // das Programm geht inzwischen weiter
        memes.then(function (result){
            res.send(result);
        });

    }

    static meme_Pic_get_by_id(req, res) {
        const {id} = req.params;
        let user = LowModel.findMemePicById(id)
        user.then(function (result){
            res.send(result);
        }).catch(function (error){
            res.status(404).send('User not found.');
        });

    }






}
module.exports = LowController;