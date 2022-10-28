const {Videogame} = require('../../db');
const {API} = require('../api/VideoGamesApi');

const  DBvideogamers = async (req, res) =>{
    try{
        const dataDBAPI = await API();
        const videogamesDB = await Videogame.findAll();
        
        const dataResult = dataDBAPI.concat(videogamesDB);
        
        res.send(dataResult);
    }
    catch(error){
        res.send(error);
    }
}

module.exports = {
    DBvideogamers
}