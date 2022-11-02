const { DBvideogamers } = require("../local/videoGamers");

const getVideogames = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let data = await DBvideogamers();
      data = data
        .filter((value) => {
          return value.name.includes(name);
        })
        .slice(0, 15);

      if (data) {
        res.send(data);
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
    let dataId = await DBvideogamers();

    dataId = dataId.filter((value) => value.id == id);

    if (dataId.length !== 0) {
      res.send(dataId);
    } else {
      res.send("id not found");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getVideogames,
  getVideogamesID,
};
