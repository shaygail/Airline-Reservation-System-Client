import {Box, Container, Typography} from '@mui/material';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';

const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: 'primary.main',
				color: 'white',
				p: 4
			}}
		>
			<Container
				maxWidth="lg"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyItems: 'center',
					flexDirection: 'column'
				}}
			>
				<AirplaneTicketRoundedIcon fontSize="large" />
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none'
					}}
				>
					XYZ Airlines
				</Typography>
				<Typography variant="p"> &copy;2022</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
