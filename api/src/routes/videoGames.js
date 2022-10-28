const { Router } = require('express');
const { API} = require('../controllers/api/VideoGamesApi');
const {DBvideogamers} = require('../controllers/local/videoGamers');
const {createVideogameDB } = require('../controllers/local/createvideogamer');

const router= Router();

router.get('/', DBvideogamers);
router.post('/', createVideogameDB);


module.exports = router;