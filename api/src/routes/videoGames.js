const { Router } = require('express');
const { API} = require('../controllers/api/VideoGamesApi');
const {createVideogameDB } = require('../controllers/local/videogamers');

const router= Router();

router.get('/', API);
router.post('/', createVideogameDB);


module.exports = router;