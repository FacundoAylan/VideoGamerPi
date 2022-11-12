const { DBvideogamers } = require("../local/videoGamers");
const { Videogame, Genre } = require("../../db");
require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogames = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let dataAPI = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
      let value = dataAPI.data.results
      value= value.map((value) => {
       return( {
          id: value.id,
          name: value.name,
          image: value.background_image,
          released: value.released,
          rating: value.rating,
          platforms: value.platforms.map((i) => {
            return i.platform.name;
          }),
          genres: value.genres.map((i) => {
            return i.name;
          }),
        })
      }) 
      // llamado a la base de datos
      let data = await Videogame.findOne({
        where: {
            name: name
        },
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
      });
      if(data){
        data = JSON.parse(JSON.stringify(data));
        data.genres = data.genres.map(g => g.name);
        value = value.concat(data)
      }
      if (data || dataAPI) {
        res.send(value);
      } else {
        res.send("game not found");
      }
    } else {
      const data = await DBvideogamers();
      res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
};

const getVideogamesID = async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")){
    // solicitud a la base de datos
      let dbInfo = await Videogame.findOne({
        where: {
            id: id
        },
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
      });

      dbInfo = JSON.parse(JSON.stringify(dbInfo));
      dbInfo.genres = dbInfo.genres.map(g => g.name);
            
      res.json(dbInfo);
    }else{
    // solicitud a la API
      let dataId = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
      let value = dataId.data
      value= {
        id: value.id,
        name: value.name,
        description: value.description_raw,
        image: value.background_image,
        released: value.released,
        rating: value.rating,
        platforms: value.platforms.map((i) => {
          return i.platform.name;
        }),
        genres: value.genres.map((i) => {
          return i.name;
        }),
      }
      if (value){;
        res.send(value);
      } else {
         res.send("game not found");
      }
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getVideogames,
  getVideogamesID,
};
