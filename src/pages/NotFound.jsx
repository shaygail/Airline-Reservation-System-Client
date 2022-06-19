import {Box, Container, Typography} from '@mui/material';
import notfound from '../assets/404.svg';

const NotFound = () => {
	return (
		<Container
			maxWidth="md"
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				height: '100vh'
			}}
		>
			<Typography component="h1" variant="h2" align="center">
				404 Page Not Found
			</Typography>
			<Box as="img" src={notfound} alt="404" width="100%" height="50%" />
		</Container>
	);
};

export default NotFound;
