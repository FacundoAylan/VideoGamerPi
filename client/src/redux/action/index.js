import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGMAES";
export const DETAIL_VIDEOGAMES = "DETAIL_VIDEOGAMES";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3003/videogames");

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
      const json = await axios.get(`http://localhost:3003/videogames/${id}`);
      dispatch({
        type: DETAIL_VIDEOGAMES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
