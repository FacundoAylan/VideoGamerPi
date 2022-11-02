const { Videogame, Genre } = require("../../db");
const { API } = require("../api/VideoGamesApi");

const DBvideogamers = async (req, res) => {
  const dataDBAPI = await API();
  const videogamesDB = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["id", "name"],
      through: {
        attributes: [],
      },
    },
  });

  const dataResult = dataDBAPI.concat(videogamesDB);

  return dataResult;
};

module.exports = {
  DBvideogamers,
};
