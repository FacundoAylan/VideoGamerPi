const { Router } = require("express");
const { APIGenres } = require("../controllers/api/genresApi");
const router = Router();

router.get("/", APIGenres);

module.exports = router;
