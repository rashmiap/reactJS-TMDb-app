import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

//import the root reducers
import rootReducer  from './reducers/index';
import movies from './data/movies';
import shows from './data/shows';

//create an object for default data
const defaultState = {
  movies,
  shows,
}
const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;
