import {
	Box,
	Button,
	CircularProgress,
	Grid,
	Paper,
	TextField,
	Typography
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Field, Form, Formik} from 'formik';
import {useState} from 'react';
import * as Yup from 'yup';
import apis from '../../api';
import logo from '../../assets/aircraft.svg';
import {useNavigate} from 'react-router-dom';

const StyledField = styled(TextField)`
	margin: theme.spacing(1);
`;

const Login = ({handleLogin}) => {
	const navigate = useNavigate();

	const [errorMessage, setErrorMessage] = useState('');

	const initialValues = {
		email: '',
		password: ''
	};

	const validationSchema = Yup.object({
		email: Yup.string().required('Required'),
		password: Yup.string().required('Required')
	});

	const onSubmit = (values, {setSubmitting}) => {
		setErrorMessage('');
		// Get user from database
		apis
			.loginUser(values)
			.then((res) => {
				const userData = res.data;
				// Check if user is admin
				apis
					.isAdmin(userData.user_id)
					.then(({data}) => {
						// Save login state
						handleLogin(userData, data.exists, true);
						// Redirect
						navigate('/home');
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => {
				if (err.message === 'Network Error') {
					return setErrorMessage('Server is offline');
				}
				if (err.message === 'Request failed with status code 400') {
					return setErrorMessage('Incorrect email/password');
				}
				return setErrorMessage(err.message);
			})
			.finally(() => setSubmitting(false));
	};

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			height="100vh"
		>
			<Paper elevation={8}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({isSubmitting, touched, errors}) => (
						<Form>
							<Grid
								container
								align="center"
								direction="column"
								spacing={2}
								p={4}
							>
								<Grid item>
									<Box
										component="img"
										src={logo}
										alt="logo"
										width={200}
										height={200}
									/>
								</Grid>
								<Grid item>
									<Field
										as={StyledField}
										label="Email"
										name="email"
										// type="email"
										variant="outlined"
										fullWidth
										error={Boolean(touched.email && errors.email)}
										helperText={touched.email && errors.email}
									/>
								</Grid>
								<Grid item>
									<Field
										as={StyledField}
										label="Password"
										name="password"
										type="password"
										variant="outlined"
										fullWidth
										error={Boolean(touched.password && errors.password)}
										helperText={touched.password && errors.password}
									/>
								</Grid>
								<Grid item>
									{errorMessage && (
										<Typography color="error">{errorMessage}</Typography>
									)}
								</Grid>
								<Grid item display="flex" position="relative">
									<Button
										variant="contained"
										type="submit"
										fullWidth
										disabled={isSubmitting}
									>
										Login
									</Button>
									{isSubmitting && (
										<CircularProgress
											size={20}
											sx={{
												color: 'white',
												position: 'absolute',
												top: '50%',
												left: '50%'
											}}
										/>
									)}
								</Grid>
							</Grid>
						</Form>
					)}
				</Formik>
			</Paper>
		</Box>
	);
};

export default Login;
