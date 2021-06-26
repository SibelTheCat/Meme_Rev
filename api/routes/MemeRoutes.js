const {Router} = require('express');

//Router wird aus expess Bib geladen und erstellt
const memeRoutes = Router();

const MemeController = require("../controllers/MemeController");
const LogInController = require("../LogIn/LogInController");
const LowController = require("../LowBandWidth/LowController");


// 2 Parameter, 2. -> funktionsobj.

memeRoutes.get('/low/:id', LowController.meme_Pic_get_by_id);
memeRoutes.get('/low', LowController.memes_low);



memeRoutes.get('/auth/:id', LogInController.user_get_by_id);
memeRoutes.get('/auth', LogInController.users_get_all);
memeRoutes.post('/auth', LogInController.user_create);



memeRoutes.get('/', MemeController.memes_get_all);
memeRoutes.get('/:id', MemeController.meme_get_by_id);
memeRoutes.post('/', MemeController.meme_create);
memeRoutes.put('/:id', MemeController.meme_update_by_id);
memeRoutes.delete('/:id', MemeController.delete_meme_by_id);










//ID 4 Login


















module.exports = memeRoutes;