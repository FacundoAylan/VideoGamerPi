require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { DBvideogamers } = require("./videoGamers");

const { Videogame, Genre } = require("../../db.js");

const createVideogameDB = async (req, res) => {
  const { name, description, image, released, rating, platforms, genres } =
    req.body;

  const genreInfo = await Genre.findAll({
    where: {
      name: genres,
    },
    attributes: ["id", "name"],
  });

  let data = await DBvideogamers();
  let result = data.filter((value) => {
    if (value.name === name) {
      return true;
    }
  });

  if (
    name &&
    description &&
    image &&
    released &&
    rating &&
    platforms &&
    genres &&
    result.length === 0
  ) {
    const newVideogame = await Videogame.create({
      name: name.toLowerCase(),
      description,
      image,
      released,
      rating,
      platforms,
    });

    newVideogame.addGenres(genreInfo);
    res.send(newVideogame);
  } else {
    res.send("Este juego ya existe");
  }
};

module.exports = {
  createVideogameDB,
};
