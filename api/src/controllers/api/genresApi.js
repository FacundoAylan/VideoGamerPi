require("dotenv").config();
const axios = require ('axios');
const {API_KEY} = process.env
const {Genre} = require('../../db')

const APIGenres = async (req, res) =>{

    const API = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

    API.data.results.map(value =>{
        Genre.findOrCreate({
            where: {
                id: value.id,
                name: value.name
            }
        })
    })
    const data = await Genre.findAll();
    res.send(data)
}

module.exports = {
    APIGenres
}