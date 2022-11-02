import { GET_VIDEOGAMES } from "../action";

const inicialState = {
  videogames: [],
};
export const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES: {
      return {
        ...state,
        videogames: action.payload,
      };
    }
    default:
      return state;
  }
};
