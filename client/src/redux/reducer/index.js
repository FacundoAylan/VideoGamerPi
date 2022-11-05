import { GET_VIDEOGAMES, DETAIL_VIDEOGAMES } from "../action";

const inicialState = {
  videogames: [],
  detail: []
};
export const rootReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES: {
      return {
        ...state,
        videogames: action.payload,
      };
    }
    case DETAIL_VIDEOGAMES: {
      return {
        ...state,
        detail: action.payload

      }
    }
    default:
      return state;
  }
};
