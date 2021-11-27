import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, ToggleButtonGroup, ToggleButton, IconButton, CardMedia, Typographie, Typography, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import BarProgress from '../../components/BarProgress';

const useStyles = makeStyles(theme => ({
	card: {
		margin: theme.spacing(2),
		height: 'max-content',
		width: '20vw',
		minWidth: '250px',
		position: 'relative',
		backgroundColor: 'rgba(5, 5, 5, 0.05) !important'
	},
	btnClose: {
		position: 'absolute !important',
		top: '0px',
		right: '0px'
	},
	img: {
		maxHeight: '430px'
	},
	flex: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
}));

const MoviesCard = ({ movie, handleClick }) => {
	const classes = useStyles();
	const [toggle, setToggle] = useState(null);

	return (
		<Card variant="outlined" className={classes.card}>
			<CardHeader
				title={movie.title}
				subheader={movie.category}
			/>
			<CardMedia
				className={classes.img}
				component="img"
				height="100%"
				image={movie.img}
				alt="jaquette"
			/>

			<Grid className={classes.flex}>
				<Typography>{toggle === 'likes' ? movie.likes + 1 : movie.likes} Likes</Typography>
				<ToggleButtonGroup
					value={toggle}
					exclusive
					onChange={(e, toggle) => setToggle(toggle)}
					aria-label="opinion"
				>
					<ToggleButton  value="likes" aria-label="likes">
						<ThumbUpOutlinedIcon color='success'/>
					</ToggleButton>
					<ToggleButton  value="dislikes" aria-label="dislikes">
						<ThumbDownOutlinedIcon color='error'/>
					</ToggleButton>
				</ToggleButtonGroup>
				<Typography>{toggle === 'dislikes' ? movie.dislikes + 1 : movie.dislikes} Dislikes</Typography>
			</Grid>

			<BarProgress
				likes={toggle === 'likes' ? movie.likes + 1 : movie.likes}
				dislikes={toggle === 'dislikes' ? movie.dislikes + 1 : movie.dislikes}
			/>

			<IconButton
				className={classes.btnClose}
				aria-label="fingerprint"
				color="error"
				size='small'
				onClick={handleClick}
			>
				<CancelOutlinedIcon />
			</IconButton>
		</Card>
	);
};

MoviesCard.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MoviesCard;
