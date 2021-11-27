import * as types from '../constants'

export const getMovies = status => ({
	type: types.GET_MOVIES,
	value: status
});