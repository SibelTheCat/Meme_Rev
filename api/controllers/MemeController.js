const MemesModel = require("../models/MemesModel");

class MemeController {
    static memes_get_all(req, res) {
        let memes = [];
        if (req.query.category) {
         memes = MemesModel.findMemesByCategory(req.query.category);
        }
        else {
            memes = MemesModel.getMemes();
        }
        //memes ist ein Promise
        memes.then(function (result){
            res.send(result);
        });

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


    static meme_create(req, res) {

        let  meme =   req.body;
       // console.log(JSON.stringify(meme));
        //create Meme returns promise
       let promise = MemesModel.createMeme(meme);
       // console.log(meme);

        promise.then(function(message){
            res.contentType("text/plain");
            res.status(201).send(message);
        }).catch(function(error){
            res.status(500).send("Error, Meme was not created");
        });


    }

    static meme_update_by_id(req, res) {

        // console.log(JSON.stringify(meme));
        //create Meme returns promise
        let meme =   req.body;
        let updated = MemesModel.updateMemeById(meme);
        // console.log(meme);

        updated.then(function(message){
            res.contentType("text/plain");
            res.status(201).send(message);
        }).catch(function(error){
            res.status(500).send("Error, Meme was not updated");
        });


    }

    static delete_meme_by_id(req, res) {
        const {id} = req.params;
        console.log("deleting meme with id: "+ id);
        let deleted = MemesModel.deleteMemeById(id);
       deleted.then(function(message){

               res.status(200).send(message);


       }).catch(function (error){
           res.status(404).send(error);
       });

    }




}

module.exports = MemeController;