import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  UPDATE_RATING,
  UPDATE_ORDER,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  movies: [],
  rating: [],
  order_by: "asc",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case MOVIE_SUCCESS:
      return { ...state, isLoading: false, movies: action.payload };
    case MOVIE_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    case UPDATE_ORDER:
      return {
        ...state,
        order_by: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
