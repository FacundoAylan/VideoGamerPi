const { Videogame, Genre } = require("../../db");
//const { API } = require("../api/VideoGamesApi");
const { API } = require("./data");

const getDbInfo = async function() {

  let dbInfo = await Videogame.findAll({
      include: {
          model: Genre,
          attributes: ['name'],
          through: {
              attributes: [],
          }
      }
  });

  dbInfo = JSON.parse(JSON.stringify(dbInfo));
  dbInfoModif = dbInfo.reverse();

  return dbInfoModif.map(videogame => {
      videogame.genres = videogame.genres.map(g => g.name);
      return videogame;
  })
}

const DBvideogamers = async (req, res) => {
  const dataDBAPI = await API(); 
  let videogamesDB = await getDbInfo()
  const dataResult =  dataDBAPI.concat(videogamesDB);
  return dataResult;

};


module.exports = {
  DBvideogamers,
};
