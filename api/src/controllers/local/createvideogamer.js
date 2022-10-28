require("dotenv").config();
const axios = require ('axios');
const {API_KEY} = process.env

const { Videogame, Genre } = require('../../db.js');

const createVideogameDB = async (req, res) =>{
    const { name, description,image, released, rating, platforms, genres } = req.body;
    
    const genreInfo = await Genre.findAll({
        where: {
            name: genres
        },
        attributes: ['id','name']
    });

    if( name && description && image && released && rating && platforms && genres ) {

        const newVideogame = await Videogame.create({
            name, 
            description,
            image,
            released,
            rating,
            platforms,
            genres: genreInfo 
        })

        newVideogame.addGenres(genreInfo);
        res.send(newVideogame);
    }

}

module.exports = {
    createVideogameDB
}
