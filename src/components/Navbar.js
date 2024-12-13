// src/components/Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#1976d2" }}>
                    {/* Icon button for menu */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Microservices App
                    </Typography>

                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/services">Services</Button>
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/contact">Contact</Button>
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile menu */}
            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer(false)}
            >
                <List
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <ListItem button component="a" href="/">
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component="a" href="/services">
                        <ListItemText primary="Services" />
                    </ListItem>
                    <ListItem button component="a" href="/about">
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button component="a" href="/contact">
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;