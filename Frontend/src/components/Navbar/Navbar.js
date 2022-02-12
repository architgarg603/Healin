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
import { Link, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


function Navbar() {
    // const classes = useStyles();
    const pages = ['Home', 'Patients', 'Profile'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const history = useHistory();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [token, setToken] = React.useState("")

    React.useEffect(() => {
        if (location.pathname == '/') {
            setToken(localStorage.getItem("token"))
        }
    }, [location.pathname])

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = (link) => {
    setAnchorElNav(null);
    history.push("/" + link)
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
                    Healin'Care
                </Typography>
                {localStorage.getItem("token") ?
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                className={styles.btn}

                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    : null}
                <Box sx={{ flexGrow: 0 }}>
                    {localStorage.getItem("token") ?
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src={profileImg} />
                        </IconButton>
                        : <div onClick={() => handleCloseNavMenu("login")} style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "15px",
                            color: "white",
                            backgroundColor: "#1A2B8B",
                            width: "120px",
                            height: "40px",
                            cursor: "pointer"
                        }}>Login</div>}
                </Box>


            </Toolbar>
        </Container>
    </AppBar >
);

}



export default Navbar
