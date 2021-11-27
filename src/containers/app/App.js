import './App.css';
import Movies from '../movies';
import { Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	title: {
		padding: theme.spacing(2),
		backgroundColor: "rgba(5, 5, 5, 0.05)"
	}
}));

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<Typography variant='h3' className={classes.title}>Cinémathèque</Typography>
			<Divider />	
			<Movies />
		</div>
	);
}

export default App;
