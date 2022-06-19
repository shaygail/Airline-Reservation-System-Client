import {Box, Button, Container, Stack} from '@mui/material';
import DatePicker from './DatePicker';

const CheckAvailability = () => {
	return (
		<Container
			maxWidth="md"
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				mt: -6
			}}
		>
			<Stack
				direction={{xs: 'column', sm: 'row'}}
				sx={{
					width: 'min',
					height: 'min',
					bgcolor: 'primary.main',
					borderRadius: 4,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2,
					p: 2
				}}
			>
				<DatePicker label="Departure Date" />
				<DatePicker label="Arrival Date" />
				<Button variant="contained" color="info">
					Check Availability
				</Button>
			</Stack>
		</Container>
	);
};

export default CheckAvailability;
