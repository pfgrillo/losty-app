import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {NavBar} from "../navbar/NavBar";
import {DrawerHeader, DrawerStyled} from "../drawer/Drawer";


export const Container: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavBar
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
            <DrawerStyled
                open={open}
                handleDrawerClose={handleDrawerClose}
            />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader/>
            </Box>
        </Box>
    );
}

