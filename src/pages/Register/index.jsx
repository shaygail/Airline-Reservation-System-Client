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
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import apis from '../../api';

const StyledField = styled(TextField)`
	margin: theme.spacing(1);
`;

const Register = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');

	const initialValues = {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirmPass: ''
	};

	const validationSchema = Yup.object({
		first_name: Yup.string().required('Required'),
		last_name: Yup.string().required('Required'),
		email: Yup.string().required('Required'),
		password: Yup.string().required('Required'),
		confirmPass: Yup.string().oneOf([Yup.ref('password'), null])
	});

	const onSubmit = (values, {setSubmitting}) => {
		setErrorMessage('');
		// Insert user into database
		apis
			.registerUser(values)
			.then((res) => {
				// Redirect to login
				navigate('/login');
			})
			.catch((err) => {
				if (err.message === 'Network Error') {
					return setErrorMessage('Server is offline');
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
					{({
						isSubmitting,
						isValidating,
						isValid,
						touched,
						errors,
						values,
						setFieldError
					}) => {
						useEffect(() => {
							if (touched.email && values.email !== '') {
								apis
									.getUserByEmail(values.email)
									.then(({data}) => {
										if (data.exists) {
											setFieldError('email', 'Email already taken!');
										}
									})
									.catch((err) => {
										console.log(err);
									});
							}
						}, [isSubmitting, isValidating]);

						return (
							<Form>
								<Grid
									container
									align="center"
									direction="column"
									spacing={2}
									p={4}
								>
									<Grid item>
										<Field
											as={StyledField}
											label="First Name"
											name="first_name"
											type="text"
											variant="outlined"
											fullWidth
											error={Boolean(touched.first_name && errors.first_name)}
											helperText={touched.first_name && errors.first_name}
										/>
									</Grid>
									<Grid item>
										<Field
											as={StyledField}
											label="Last Name"
											name="last_name"
											type="text"
											variant="outlined"
											fullWidth
											error={Boolean(touched.last_name && errors.last_name)}
											helperText={touched.last_name && errors.last_name}
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
											disabled={isSubmitting || !isValid}
										>
											Register
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
						);
					}}
				</Formik>
			</Paper>
		</Box>
	);
};

export default Register;
