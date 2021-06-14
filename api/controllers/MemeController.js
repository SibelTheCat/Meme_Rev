const MemesModel = require("../models/MemesModel");

class MemeController {
    static memes_get_all(req, res) {
        const memesArray = MemesModel.getMemes();
        res.send(memesArray);
    }

    static meme_get_by_id(req, res) {
        const {id} = req.params;
        const getMeme = MemesModel.findMemesById(id);
        if (getMeme) {
            res.send(getMeme);
        } else {
            res.status(404).send('Meme not found.');
        }
    }


    static meme_create_book(req, res) {
        //
        let  meme =   req.body;
        MemesModel.createMeme(meme);
       // console.log(meme);
        res.status(201).send("Meme was created");

    }

    static meme_update_book_by_id(req, res) {
        const {id} =   req.params.id;
        let meme =   req.body;
        let updated = MemesModel.updateMemeById(id, meme);
        if (updated){
            res.status(200).send("Meme was updated");
        }
        else {
            res.status(404).send("Meme id does not exist, book was not updated");
        }


    }

    static delete_meme_by_id(req, res) {
        const {id} = req.params;

        let deleted = MemesModel.deleteMemeById(id);
        if (deleted){
            res.status(200).send('Meme was deleted');
        }
        res.status(404).send('Meme not found. Could not get deleted');

    }


}

module.exports = MemeController;