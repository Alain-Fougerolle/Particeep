import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Movies from './moviesView';
import { getMovies } from '../../actions';

export default props => {
	const dispatch = useDispatch();

	return (
		<Movies
			movies={useSelector(state => state.movies.movies) || []}
			getMovies={payload => dispatch(getMovies(payload))}
			{...props}
		/>
	);
};
