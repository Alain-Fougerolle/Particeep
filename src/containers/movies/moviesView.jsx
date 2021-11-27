import { makeStyles } from '@material-ui/core/styles';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import MultiSelect from '../../components/MultiSelect';
import Pagination from '../../components/Pagination';
import MoviesCard from './moviesCard';

const useStyles = makeStyles(theme => ({
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	flex: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItem: 'center'
	},
	select: {
		margin: '16px !important',
		maxWidth: '30vw',
		minWidth: '250px !important'
	}
}));
	
const MoviesView = ({ movies, getMovies }) => {
	const classes = useStyles();
	const [stateMovies, setStateMovies] = useState([]);
	const [moviesFilter, setMoviesFilter] = useState([]);
	const [moviesCount, setMoviesCount] = useState(12);
	const [page, setPage] = useState(1);

	const handleClick = id => {
		let categoryDelete = stateMovies.filter(e => e.id === id)[0].category;
		if (moviesFilter.includes(categoryDelete) && stateMovies.filter(e => e.category === categoryDelete).length === 1) {
			setMoviesFilter(moviesFilter.filter(e => e !== categoryDelete));
		}
		setStateMovies(stateMovies.filter(e => e.id !== id))
	};

	useEffect(() => {
		if (stateMovies.length === 0) {
			getMovies();
			setStateMovies(Object.values(movies));
		}
	}, [getMovies, movies, stateMovies]);

	const filterMovies = useMemo(() => {
		if (moviesFilter.length > 0) {
			return stateMovies.filter(i => moviesFilter.includes(i.category))
		}
		return stateMovies
	}, [moviesFilter, stateMovies]);

	const filterPage = useMemo(() => {
		if (moviesCount < filterMovies.length) {
			return filterMovies.slice((page - 1) * moviesCount, moviesCount * page);
		}
		return filterMovies;
	}, [moviesCount, page, filterMovies]);

	return (
		<Container maxWidth="xl">
			<Grid className={classes.flex}>
				<MultiSelect
					multiSelect={[{
						title: 'Filtrer film par catégorie',
						list: Array.from(new Set(stateMovies.map(m => m.category))),
						state: [moviesFilter, setMoviesFilter]
					}]}
				/>

				<FormControl fullWidth className={classes.select}>
					<InputLabel id="demo-simple-select-label">Nombre de film affichés</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						value={moviesCount}
						label="Nombre de films affichés"
						onChange={e => {
							setMoviesCount(e.target.value);
							setPage(1);
						}}
					>
						<MenuItem value={4}>4 éléments</MenuItem>
						<MenuItem value={8}>8 éléments</MenuItem>
						<MenuItem value={12}>12 éléments</MenuItem>
					</Select>
				</FormControl>

				{stateMovies.length > moviesCount && (
					<Pagination
						page={page}
						next={() => setPage(page + 1)}
						prev={() => setPage(page - 1)}
						pageMax={Math.ceil(filterMovies.length / moviesCount)}
					/>
				)}
			</Grid>


			<Grid className={classes.grid}>
				{filterPage.map(movie => (
					<MoviesCard
						key={movie.id}
						movie={movie}
						handleClick={() => handleClick(movie.id)}
					/>
				))}
			</Grid>

		</Container>
	);
};

MoviesView.propTypes = {
	movies: PropTypes.array.isRequired
};

export default MoviesView;
