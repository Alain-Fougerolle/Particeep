import { combineReducers } from 'redux';
import movies from './containers/movies/moviesReducer';


const rootReducer = combineReducers({
	movies
});

export default rootReducer;