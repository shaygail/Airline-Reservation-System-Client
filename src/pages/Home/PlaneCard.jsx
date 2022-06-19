import {Box, Chip, Paper, Stack, Typography} from '@mui/material';

const PlaneCard = ({name, model, price, seats}) => {
	return (
		<Paper sx={{p: 2}} elevation={4}>
			<Stack spacing={2}>
				<Box
					as="img"
					borderRadius={2}
					width="100%"
					src="https://via.placeholder.com/200?text=image"
					alt={name}
				></Box>
				<Typography component="h3" variant="h4">
					{name}
				</Typography>
				<Typography component="p" variant="p">
					{model}
				</Typography>
				{price && (
					<Typography component="h4" variant="h5" color="primary">
						{`$${price}`}
					</Typography>
				)}
				<Stack direction="row" spacing={1} alignSelf="center">
					<Chip label={`${seats} Seats`} />
					<Chip label="Inflight WiFi" />
					<Chip label="A/C" />
				</Stack>
			</Stack>
		</Paper>
	);
};

export default PlaneCard;
