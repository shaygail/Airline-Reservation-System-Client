import {Container, Grid, Typography} from '@mui/material';
import {useState} from 'react';
import PricingCard from './PricingCard';

const flights = [
	{
		name: 'Luxury Jet Charter',
		model: 'Syberjet SJ30i',
		price: 250,
		description: ['6 Seats'],
		routes: ['Rotorua', 'Sydney', 'Dairy Flat']
	},
	{
		name: 'Cirrus Jet Charter',
		model: 'Cirrus SF50',
		price: 150,
		description: ['4 Seats'],
		routes: ['Dairy Flat', 'Rotorua', 'Dairy Flat']
	}
];

const Pricing = () => {
	const [ascending, setAscending] = useState(true);

	const handleSort = () => {
		return ascending ? -1 : 1;
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
			<Grid container spacing={4} columns={{xs: 1, md: 12}} my={4}>
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