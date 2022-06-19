import {Box, CssBaseline} from '@mui/material';
import {useEffect, useState} from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Pricing from '../pages/Pricing';
import Register from '../pages/Register';

function App() {
	const {pathname} = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const [userData, setUserData] = useState({});
	const [isAdmin, setAdmin] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const savedUser = localStorage.getItem('user');
		const savedAdmin = localStorage.getItem('isAdmin');
		if (savedUser && savedAdmin) {
			const jsonUser = JSON.parse(savedUser);
			const jsonAdmin = JSON.parse(savedAdmin);
			handleLogin(jsonUser, jsonAdmin, true);
		}
	}, []);

	const handleLogin = (user, admin, login) => {
		setUserData(user);
		setAdmin(admin);
		setLoggedIn(login);
		localStorage.setItem('user', JSON.stringify(user));
		localStorage.setItem('isAdmin', admin);
	};

	const handleLogout = () => {
		setUserData({});
		setAdmin(false);
		setLoggedIn(false);
		localStorage.clear();
	};

	return (
		<>
			<CssBaseline />
			<Navbar
				userData={userData}
				isAdmin={isAdmin}
				loggedIn={loggedIn}
				handleLogout={handleLogout}
			/>
			<Box mt={8}>
				<Routes>
					<Route
						exact
						path="/login"
						element={<Login handleLogin={handleLogin} />}
					/>
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/" element={<Home />} />
					<Route exact path="/home" element={<Home />} />
					<Route exact path="/pricing" element={<Pricing />} />
					<Route exact path="/services" element={<></>} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</Box>
			<Footer />
		</>
	);
}

export default App;
