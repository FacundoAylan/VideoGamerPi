import axios from "axios";

export const GET_VIDEOGAMES = "VIDEOGMAES";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get("http://localhost:3001/videogames");

      dispatch({
        type: GET_VIDEOGAMES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
