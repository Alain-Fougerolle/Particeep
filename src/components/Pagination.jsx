import React from 'react';
import PropTypes from 'prop-types';
import { Grid, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	flex: {
		display: 'flex',
		flexWrap: 'no wrap',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));
 
const Pagination = ({ page, pageMax, prev, next }) => {
	const classes = useStyles();

	return (
		<Grid className={classes.flex}>
			<IconButton
				className={classes.btn}
				aria-label="prev"
				onClick={prev}
				disabled={page === 1}
			>
				<ArrowBackIosNewIcon />
			</IconButton>
			<Typography>
				Page {page} sur {pageMax}
			</Typography>
			<IconButton
				className={classes.btn}
				aria-label="next"
				onClick={next}
				disabled={page === pageMax}
			>
				<ArrowForwardIosIcon />
			</IconButton>
		</Grid>
	);
};

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	pageMax: PropTypes.number.isRequired,
	prev: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired
};

export default Pagination;
