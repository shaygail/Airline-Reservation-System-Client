import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AirplaneTicketRoundedIcon from '@mui/icons-material/AirplaneTicketRounded';
import {Link} from 'react-router-dom';

const pages = ['Home', 'Pricing', 'Services'];
const settings = ['Profile', 'Bookings', 'Dashboard', 'Logout'];

const Navbar = ({userData, isAdmin, loggedIn, handleLogout}) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar sx={{boxShadow: 4}}>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<AirplaneTicketRoundedIcon
						sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							display: {xs: 'none', md: 'flex'},
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						XYZ Airlines
					</Typography>
					<Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: {xs: 'block', md: 'none'}
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<AirplaneTicketRoundedIcon
						sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: {xs: 'flex', md: 'none'},
							flexGrow: 1,
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						XYZ
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: {xs: 'none', md: 'flex'},
							justifyContent: 'center',
							gap: 2
						}}
					>
						{pages.map((page) => (
							<Button
								to={page.toLowerCase()}
								component={Link}
								key={page}
								onClick={handleCloseNavMenu}
								sx={{my: 2, color: 'white', display: 'block'}}
							>
								{page}
							</Button>
						))}
					</Box>
					<Box>
						{loggedIn ? (
							<Box display="flex" alignItems="center">
								<Typography
									sx={{
										display: {xs: 'none', md: 'flex'},
										pr: 2
									}}
								>
									{userData.username}
								</Typography>
								<Tooltip title="Open settings">
									<IconButton
										onClick={handleOpenUserMenu}
										sx={{p: 0, color: 'white'}}
									>
										<AccountCircleIcon fontSize="large" />
									</IconButton>
								</Tooltip>
							</Box>
						) : (
							<Box
								sx={{
									display: 'flex',
									gap: 1,
									flexDirection: {xs: 'column', md: 'row'},
									p: 1
								}}
							>
								<Button
									to="/login"
									component={Link}
									variant="outlined"
									sx={{
										color: 'white',
										borderColor: 'white'
									}}
								>
									Login
								</Button>
								<Button
									to="/register"
									component={Link}
									variant="contained"
									disableElevation
									sx={{
										color: 'black',
										bgcolor: 'white'
									}}
								>
									Register
								</Button>
							</Box>
						)}
						<Menu
							sx={{mt: '45px'}}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings
								.filter((setting) => {
									if (setting === 'Dashboard' && !isAdmin) return false;
									return true;
								})
								.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										{setting === 'Logout' ? (
											<Typography textAlign="center" onClick={handleLogout}>
												{setting}
											</Typography>
										) : (
											<Typography textAlign="center">{setting}</Typography>
										)}
									</MenuItem>
								))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
