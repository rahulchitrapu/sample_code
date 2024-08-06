import { combineReducers } from 'redux';
import authReducer from './AuthReducer/reducer';
import movieReducer from './MovieReducer/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  movies: movieReducer
});

export default rootReducer;
