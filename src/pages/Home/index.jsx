import {Box, Button, Container, Grid, Typography} from '@mui/material';
import CheckAvailability from './CheckAvailability';
import Hero from './Hero';
import Section1 from './Section1';
import Section2 from './Section2';

const Home = () => {
	return (
		<Box>
			<Hero />
			<CheckAvailability />
			<Section1 />
			<Section2 />
		</Box>
	);
};

export default Home;
