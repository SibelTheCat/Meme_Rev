const UserModel = require("./LogInModel");


class LogInController {


    static user_get_by_id(req, res) {
        const {id} = req.params;
        const getUser = UserModel.findUserById(id);
        if (getUser) {
            res.send(getUser);
        } else {
            res.status(404).send('User not found.');
        }
    }


    static User_create_user(req, res) {
        //
        let  User =   req.body;
        UserModel.createUser(User);
       // console.log(meme);
        res.status(201).send("User was created");

    }

    static User_update_by_id(req, res) {
        const {id} =   req.params.id;
        let User =   req.body;
        let updated = UserModel.updateUserById(id, user);
        if (updated){
            res.status(200).send("User was updated");
        }
        else {
            res.status(404).send("User id does not exist, User was not updated");
        }


    }


}

module.exports = LogInController;