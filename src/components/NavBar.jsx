import { useState } from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import BurgerIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/CloseRounded';
import bellaIcon from '/bellaicon.svg'

function BellaIcon() {
    return (
        <img src={bellaIcon} style={{ width: '50px', height: '50px', marginRight: '16px' }} />
    );
}

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '16px',
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    }
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(10px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.dark,
    padding: '8px 12px',
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    display: 'block',
    my: 1,
    padding: '8px 16px',
    fontSize: '16px',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    }
}));

function NavBar({ pages }) {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const handleBurgerClose = () => {
        setBurgerOpen(false);
    };
    const handleBurgerOpen = () => {
        setBurgerOpen(true);
    };
    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <StyledToolbar disableGutters>
                    {/* Bella's face icon */}
                    <BellaIcon />
                    {/* Page Title List (Desktop/Widescreen Only) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={page.path} key={page.title}>
                                <StyledButton key={page.title} sx={{ display: 'block', mx: 1 }} >
                                    {page.title}
                                </StyledButton>
                            </Link>
                        ))}
                    </Box>
                    {/* Burger Menu (Mobile Only) */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
                        <IconButton onClick={handleBurgerOpen} > {/* Button to open the burger menu */}
                            <BurgerIcon />
                        </IconButton>
                        <Drawer // Pop-up burger menu
                            anchor="top"
                            open={burgerOpen}
                            onClose={handleBurgerClose}
                        >
                            <Box sx={{ p: 2, backgroundColor: "primary.main" }}>
                                <Box sx={{ display: { xs: 'flex', alignItems: 'center', justifyContent: 'space-between' } }}> {/* Box around button to move it to right */}
                                    <BellaIcon />
                                    <IconButton onClick={handleBurgerClose}> {/* Button to close the burger menu */}
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                {pages.map((page) => (
                                    <Link to={page.path} key={page.title}>
                                        <StyledMenuItem key={page.title} >
                                            {page.title}
                                        </StyledMenuItem>
                                    </Link>
                                ))}
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;