import * as React from 'react';
import styles from './Navbar.module.css'
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import profileImg from '../../assets/profile.png'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


function Navbar() {
    // const classes = useStyles();
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
        <AppBar className={styles.wrapper} position="static" sx={{ position: 'relative', zIndex: '10' }}>
            <Container maxWidth="xl" sx={{ background: "white", padding: "0px 50px !important" }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2, display: { xs: 'none', md: 'flex' },
                            fontFamily: "Poppins",
                            fontWeight: 'bold',
                            fontSize: '24px',
                            color: '#1A2B8B',
                            marginRight: "50px"
                        }}
                    >
                        LOGO
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color: "black" } }}> */}
                        {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ color: "black !important" }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        {/* <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: "black"
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ color: "black" }}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                   
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                className={styles.btn}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={profileImg} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                                    <Link to={`/${setting}`}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );

}



export default Navbar
