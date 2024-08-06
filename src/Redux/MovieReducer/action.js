import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILURE,
  UPDATE_RATING,
  UPDATE_ORDER,
} from "./actionTypes";

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: MOVIE_REQUEST });
  // console.log(data1);
  try {
    fetch("/db.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({ type: MOVIE_SUCCESS, payload: res.movies });
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  } catch (error) {
    dispatch({ type: MOVIE_FAILURE });
  }
};
export const update_rating = (dispatch, value) => {
  console.log(value);
  dispatch({ type: UPDATE_RATING, payload: value });
};

export const update_order = (dispatch, value) => {
  dispatch({ type: UPDATE_ORDER, payload: value });
};
