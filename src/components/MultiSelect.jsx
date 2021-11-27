import React from 'react';
import PropTypes from 'prop-types';

import { Grid, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { Chip } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	formControl: {
		maxWidth: '30vw',
		minWidth: '250px',
		width: '100%',
		margin: theme.spacing(2, 0),
		height: 48,
		'& label': {
			transform: 'translate(16px, 16px) scale(1)'
		},
	},
	chips: {
		padding: '0px !important',
		height: 19
	},
	chip: {
		marginRight: 2,
	}
}));

const MultiSelect = ({ multiSelect }) => {
	const classes = useStyles();

	const labelMultiSelect = (m, label) => {
		if (label) {
			return label;
		}
		return m;
	};

	const labelChip = (s, key, label) => {
		if (label) {
			if (label[key.indexOf(s)]) {
				return label[key.indexOf(s)];
			}
		}
		return s;
	};

	return (
		multiSelect.map(m => (
			<FormControl color='primary' variant="outlined" className={classes.formControl} key={`multiple-select-${m.title}`}>
				<InputLabel id={`multiple-select-${m.title}`} color='primary'>{m.title}</InputLabel>
				<Select
					labelId={`multiple-select-${m.title}`}
					value={m.state[0]}
					onChange={e => m.state[1](e.target.value)}
					label={m.title}
					multiple
					renderValue={select => (
						<Grid container wrap="nowrap" className={classes.chips}>
							{select.map(s => (
								<Chip
									key={`multiple-select-chip-${s}`}
									label={labelChip(s, m.list, m.listLabel)}
									className={classes.chip}
									variant="outlined"
									color="default"
									size="small"
								/>
							))}
						</Grid>
					)}
					MenuProps={{
						PaperProps: {
							style: {
								maxHeight: 48 * 4.5 + 8, // Item_Height * 4.5 + Item_Padding_Top
								width: 250,
							}
						}
					}}
				>
					{m.list.map((n, index) => (
						<MenuItem
							key={`multiple-select-item-${n}`}
							value={n}
							style={{ fontWeight: m.state[0].indexOf(n) === -1 ? 'normal' : 'bold' }}
						>
							{labelMultiSelect(n, m.listLabel && m.listLabel[index])}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		))
	);
};

MultiSelect.propTypes = {
	multiSelect: PropTypes.array.isRequired
};

export default MultiSelect;
