const {Router} = require('express');
const memeRoutes = Router();

const MemeController = require("../controllers/MemeController");
const LogInController = require("../LogIn/LogInController");
//const MemesModel = require("../models/MemesModel");


memeRoutes.get('/', MemeController.memes_get_all);

memeRoutes.get('/:id', MemeController.meme_get_by_id);

memeRoutes.post('/', MemeController.meme_create_book);
memeRoutes.put('/:id', MemeController.meme_update_book_by_id);
memeRoutes.delete('/:id', MemeController.delete_meme_by_id);










//ID 4 Login

memeRoutes.get('/login:id', LogInController.user_get_by_id);
memeRoutes.post('/login', LogInController.User_create_user);
memeRoutes.put('/login:id', LogInController.User_update_by_id);





















module.exports = memeRoutes;