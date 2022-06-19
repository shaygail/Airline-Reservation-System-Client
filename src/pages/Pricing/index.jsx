import {Container, Grid, Typography, Button} from '@mui/material';
import {useState} from 'react';
import PricingCard from './PricingCard';

const flights = [
	{
		name: 'Luxury Jet Charter',
		model: 'Syberjet SJ30i',
		price: 250,
		seats: 6,
		description: ['Departure: Friday 8AM', 'Return: Sunday 3PM'],
		routes: ['Rotorua', 'Sydney', 'Dairy Flat']
	},
	{
		name: 'Cirrus Jet Charter',
		model: 'Cirrus SF50',
		price: 150,
		seats: 4,
		description: ['Departure: Weekdays 6AM', 'Return: Same Day 9PM'],
		routes: ['Dairy Flat', 'Rotorua', 'Dairy Flat']
	}
];

const Pricing = () => {
	const [sortAscending, setSortAscending] = useState(true);

	const toggleAscending = () => {
		setSortAscending((prev) => !prev);
	};

	const handleSort = (a, b) => {
		if (a['price'] < b['price']) return sortAscending ? -1 : 1;
		if (a['price'] > b['price']) return sortAscending ? 1 : -1;
		return 0;
	};

	return (
		<Container maxWidth="lg" component="main" sx={{py: 8}}>
			<Typography
				component="h1"
				variant="h2"
				align="center"
				color="text.primary"
				gutterBottom
			>
				Pricing
			</Typography>
			<Typography
				variant="h5"
				align="center"
				color="text.secondary"
				component="p"
				gutterBottom
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni
				odit magnam alias nobis pariatur veritatis perferendis laudantium.
			</Typography>
			<Button variant="outlined" onClick={() => toggleAscending()}>
				Toggle Ascending
			</Button>
			<Grid container spacing={4} columns={{xs: 1, sm: 6, md: 12}} my={4}>
				{flights.sort(handleSort).map((flight, i) => {
					return (
						<Grid item xs={3} key={i}>
							<PricingCard {...flight} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
};

export default Pricing;
