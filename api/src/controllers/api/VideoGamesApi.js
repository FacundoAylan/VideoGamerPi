require("dotenv").config();
const axios = require ('axios');
const {API_KEY} = process.env


const API = async (req,res) =>{
    try{
        let dataAPI = [];
        for(let i = 1; i<6 ; i++){
            let gameAPI = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
            const model = gameAPI.data.results.map((value) =>{
                return {
                    id: value.id,
                    name: value.name,
                    description: value.description,
                    image: value.background_image,
                    released: value.released,
                    rating: value.rating,
                    platforms: value.platforms.map(i =>{
                        return i.platform.name
                    }),
                    genres: value.genres.map(i => {
                        return i.name
                    })
                }
            });
            dataAPI = dataAPI.concat(model);
        }
        return(dataAPI);
    }catch(error){
        res.send(error)
    }
};

module.exports ={
    API
}
