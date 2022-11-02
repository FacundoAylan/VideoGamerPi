const { Router } = require("express");
const {
  getVideogames,
  getVideogamesID,
} = require("../controllers/routerFilter/routerFilter");
const { createVideogameDB } = require("../controllers/local/createvideogamer");

const router = Router();

router.get("/", getVideogames);
router.get("/:id", getVideogamesID);
router.post("/", createVideogameDB);

module.exports = router;
