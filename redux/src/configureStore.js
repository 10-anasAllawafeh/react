import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import AllReducers from './reducers';
 
const reducer = AllReducers;
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);
 
export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
}