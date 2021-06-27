

const UserModel = require("./LogInModel");


class LogInController {


    static getLogin(req,res){
        let  user =   req.body;

        let promise = UserModel.GetLogin(user);


        promise.then(function(message){
            res.contentType("text/plain");
            res.status(201).send(message);
        }).catch(function(error){
            res.status(500).send("Error, Meme was not created");
        });
    }



    static users_get_all(req, res) {
        let users = [];

        users = UserModel.getUser();

        users.then(function (result){
            res.send(result);
            console.log(result);
        });

    }

    static user_get_by_id(req, res) {
        const {id} = req.params;
        let user = UserModel.findUsersById(id)
        user.then(function (result){
            res.send(result);
        }).catch(function (error){
            res.status(404).send('User not found.');
        });

    }


    static user_create(req, res) {

        let  user =   req.body;
        // console.log(JSON.stringify(meme));
        //create Meme returns promise
        let promise = UserModel.createUser(user);
        // console.log(meme);

        promise.then(function(message){
            res.contentType("text/plain");
            res.status(201).send(message);
        }).catch(function(error){
            res.status(500).send("Error, Meme was not created");
        });


    }



}
module.exports = LogInController;
