import {
  GET_VIDEOGAMES,
  DETAIL_VIDEOGAMES,
  GET_VIDEOGAMES_NAME,
  FILTER_CREATE,
  FILTER_RATING,
  GET_GENRES,
  VIDEOGAMERS_ALL,
  FILTER_GENRE
} from "../action";

const inicialState = {
  videogames: [],
  allVideogamers: [],
  detail: [],
  genres: []
};
export const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES: {
      return {
        ...state,
        videogames: action.payload,
        allVideogamers: action.payload,
      };
    }
    case DETAIL_VIDEOGAMES: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case GET_VIDEOGAMES_NAME: {
      if (action.payload.length > 0) {
        return {
          ...state,
          videogames: action.payload,
        };
      }
    }
    case FILTER_CREATE: {
      const allVideogamers = state.allVideogamers;
      const filterVideogamers =
        action.payload === "Api"
          ? allVideogamers.filter((value) => {
              const expresion = /^[0-9]+$/;
              return expresion.test(value.id);
            })
          : allVideogamers.filter((value) => {
              const expresion = /^[0-9]+$/;
              return !expresion.test(value.id);
            });
      return {
        ...state,
        videogames: filterVideogamers,
      };
    }
    case FILTER_RATING : {
      let orderRatingGenre = action.payload === "true"? 
      state.videogames.sort((a,b) =>{
          if (a.rating < b.rating) {
            return -1;
        }
        if (a.rating > b.rating) {
            return 1;
        }
        return 0;
        }): 
        state.videogames.sort((a, b) => {
          if (a.rating < b.rating) {
              return 1;
          }
          if (a.rating > b.rating) {
              return -1;
          }
          return 0;
      })
      return {
        ...state,
        videogames: orderRatingGenre
      }
    }
    case GET_GENRES: {
      return {
        ...state,
        genres: action.payload
      }
    }
    case FILTER_GENRE: {
      const filterGenre = state.videogames.filter((value) => value.genres.includes(action.payload))
      if(filterGenre.length >0){
        return{
          ...state,
          videogames: filterGenre
        }
      }
    }
    case VIDEOGAMERS_ALL: {
      let orderVideogamesByName =action.payload === "true"? state.videogames.sort((a, b) => {
              return a.name.localeCompare(b.name);
            })
          : state.videogames.sort((a, b) => {
              return b.name.localeCompare(a.name);
            });
            console.log(orderVideogamesByName)
      return {
        ...state,
        videogames: orderVideogamesByName,
      };
    }
    default:
      return state;
  }
};
