const { Router } = require('express');
const { API} = require('../controllers/api/VideoGamesApi')
const {APIGenres } = require('../controllers/api/genresApi')
const router= Router();

router.get('/', API);

module.exports = router;