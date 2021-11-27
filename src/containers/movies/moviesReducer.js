import { movies$ } from '../../movies';

const initialState = {};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case 'GET_MOVIES': {
			const movies = [];
			movies$.then(result => movies.push(...Object.values(result)))
			
			return {
				...state,
				movies
			};
		}
		default:
		return state
	}
};
