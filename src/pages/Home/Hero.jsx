import {Box, Button, Container, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import book_now from '../../assets/book_now.svg';

const Hero = () => {
	return (
		<Box bgcolor="aliceblue">
			<Container maxWidth="lg">
				<Box
					sx={{
						display: {xs: 'block', md: 'flex'},
						alignItems: 'center',
						justifyContent: 'space-around',
						py: 8
					}}
				>
					<Box>
						<Typography
							component="h1"
							variant="h2"
							sx={{textAlign: {xs: 'center', md: 'left'}}}
						>
							Luxury Experience With Our Private Jet
						</Typography>
						<Button
							variant="contained"
							size="large"
							sx={{
								width: {xs: '100%', md: '12rem'},
								height: '4rem',
								borderRadius: 10,
								mt: 2
							}}
							endIcon={<ArrowForwardIcon />}
						>
							<Typography variant="h6">Book Now!</Typography>
						</Button>
					</Box>
					<Box
						component="img"
						src={book_now}
						alt="logo"
						sx={{
							width: {xs: '100%', md: '50%'}
						}}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
