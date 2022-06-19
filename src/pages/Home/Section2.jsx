import {Box, Button, Container, Grid, Typography} from '@mui/material';
import PlaneCard from './PlaneCard';
import {Link} from 'react-router-dom';

const Section2 = () => {
	return (
		<Box bgcolor="aliceblue">
			<Container id="pricing" maxWidth="lg" align="center" sx={{py: 8}}>
				<Typography component="h2" variant="h3" pb={8}>
					Planes For You
				</Typography>
				<Grid container spacing={4} align="left" columns={{xs: 1, md: 12}}>
					<Grid item xs={4}>
						<PlaneCard
							name="Luxury Jet Charter"
							model="Syberjet SJ30i"
							seats={6}
						/>
					</Grid>
					<Grid item xs={4}>
						<PlaneCard
							name="Elite Jet Charter"
							model="HondaJet Elite"
							seats={5}
						/>
					</Grid>
					<Grid item xs={4}>
						<PlaneCard
							name="Cirrus Jet Charter"
							model="Cirrus SF50"
							seats={4}
						/>
					</Grid>
				</Grid>
				<Button
					to="/pricing"
					component={Link}
					variant="contained"
					size="large"
					sx={{m: 8, borderRadius: 10}}
				>
					See Pricing
				</Button>
			</Container>
		</Box>
	);
};

export default Section2;
