const UserModel = require("./LogInModel");


class LogInController {
    static user_get_all(req, res) {
        let user = [];
        if (req.query.category) {
         user = UserModel.findUserByCategory(req.query.category);
        }
        else {
            user = UserModel.getUser();
     //  console.log("memes:" + memes);
        }

        res.send(user);
    }

    static user_get_by_id(req, res) {
        const {id} = req.params;
        const getUser = UserModel.findUserById(id);
        if (getUser) {
            res.send(getUser);
        } else {
            res.status(404).send('Meme not found.');
        }
    }


    static User_create_user(req, res) {
        //
        let  User =   req.body;
        UserModel.createUser(User);
       // console.log(meme);
        res.status(201).send("Meme was created");

    }

    static User_update_by_id(req, res) {
        const {id} =   req.params.id;
        let User =   req.body;
        let updated = UserModel.updateUserById(id, user);
        if (updated){
            res.status(200).send("Meme was updated");
        }
        else {
            res.status(404).send("Meme id does not exist, meme was not updated");
        }


    }


}

module.exports = LogInController;