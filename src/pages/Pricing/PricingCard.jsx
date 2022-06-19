import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Stack,
	Typography
} from '@mui/material';

const PricingCard = ({name, model, price, seats, description, routes}) => {
	return (
		<Card elevation={4}>
			<CardHeader
				title={name}
				titleTypographyProps={{align: 'center'}}
				subheader={model}
				subheaderTypographyProps={{align: 'center'}}
				sx={{bgcolor: 'aliceblue'}}
			/>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'baseline',
						mb: 2
					}}
				>
					<Typography component="h2" variant="h3" color="primary">
						${price}
					</Typography>
				</Box>
				<Stack align="center" spacing={1}>
					<Typography component="p" variant="h6" align="center">
						{seats} Seats
					</Typography>
					{routes.map((route, i, array) => {
						return (
							<Typography key={i} color="text.primary">
								{route}
								<KeyboardArrowDownIcon
									sx={{
										display: i >= array.length - 1 ? 'none' : 'block',
										color: 'text.secondary',
										mb: -1
									}}
								/>
							</Typography>
						);
					})}
				</Stack>
			</CardContent>
			{description.map((line) => (
				<Typography component="p" variant="subtitle2" align="center" key={line}>
					{line}
				</Typography>
			))}
			<CardActions>
				<Button fullWidth variant="contained">
					Book
				</Button>
			</CardActions>
		</Card>
	);
};

export default PricingCard;
