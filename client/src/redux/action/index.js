import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGMAES";
export const DETAIL_VIDEOGAMES = "DETAIL_VIDEOGAMES";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME";
export const FILTER_CREATE = "FILTER_CREATE";
export const VIDEOGAMERS_ALL = "VIDEOGAMERS_ALL";
export const FILTER_RATING = "FILTER_RATING";
export const GET_GENRES = "GET_GENRES";
export const FILTER_GENRE = "FILTER_GENRE";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3006/videogames");

      dispatch({
        type: GET_VIDEOGAMES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailVideogames = (id) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`http://localhost:3006/videogames/${id}`);
      dispatch({
        type: DETAIL_VIDEOGAMES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const videogamesName = (name) => {
  return async (dispatch) => {
    try {
      const json = await axios.get(
        `http://localhost:3006/videogames/?name=${name}`
      );
      dispatch({
        type: GET_VIDEOGAMES_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterCreate = (value) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: FILTER_CREATE,
        payload: value,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filter_rating = (value) => {
  return async(dispatch) => {
    dispatch({
      type: FILTER_RATING,
      payload: value
    })
  }
};
export const getGenres = () => {
  return async(dispatch) => {
    try {
      const json = await axios.get(
        `http://localhost:3006/genres`
      );
      dispatch({
        type: GET_GENRES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const filterGenre = ( genre) => {
  return async(dispatch) => {
    try {
      dispatch({
        type: FILTER_GENRE,
        payload:genre
      })
    }catch(error){
      console.log(error)
    }
  }
}
export const videogamersALL = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: VIDEOGAMERS_ALL,
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const create = (payload) =>{
  return async (dispatch) => {
    try{
      return await axios.post("http://localhost:3006/videogames", payload)
    }catch(error){
      console.log(error);
    }
  }
}
