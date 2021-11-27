import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
	likes: {
		backgroundColor: green[500],
	},
	dislikes: {
		width: '100%',
		backgroundColor: red[500],
		margin: '0px 5px 5px 5px',
		width: 'auto'
	},
	barProgress: {
		height: 20,
		borderRadius: theme.spacing(2),
	}
}));

const BarProgress = ({ likes, dislikes }) => {
	const classes = useStyles();

	const widthLikes = (likes, dislikes) => {
		if (typeof likes === 'number' && typeof dislikes === 'number') {
			const max = likes + dislikes;
			const width = (likes * 100) / max;
			return { width: `${width}%` };
		}
		return { width: '100%' };
	};

	return (
		<div className={`${classes.dislikes} ${classes.barProgress}`}>
			<div className={`${classes.likes} ${classes.barProgress}`} style={widthLikes(likes, dislikes)} />
		</div>
	);
};

BarProgress.propTypes = {
	likes: PropTypes.number.isRequired,
	dislikes: PropTypes.number.isRequired,
};

export default BarProgress;
