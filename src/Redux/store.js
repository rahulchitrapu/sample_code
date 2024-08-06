import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Named import
import rootReducer from './rootReducer'; // Ensure this path is correct

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
