import {Box, Button, Container, Grid, Stack, Typography} from '@mui/material';
import discover from '../../assets/discover.svg';

const Section1 = () => {
	return (
		<Container maxWidth="lg" align="center" sx={{py: 8}}>
			<Typography component="h2" variant="h3" pb={8}>
				Take a Tour
			</Typography>
			<Grid container spacing={2} align="center" columns={{xs: 1, md: 12}}>
				<Grid item xs={6}>
					<Box as="img" src={discover} alt="map" width="100%" />
				</Grid>
				<Grid
					item
					xs={6}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Container maxWidth="xs">
						<Stack spacing={8}>
							<Typography component="h3" variant="h4">
								Discover Sydney
							</Typography>
							<Typography component="p" variant="p">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat.
							</Typography>
							<Button
								variant="outlined"
								sx={{width: '50%', alignSelf: 'center'}}
							>
								Learn More
							</Button>
						</Stack>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Section1;
