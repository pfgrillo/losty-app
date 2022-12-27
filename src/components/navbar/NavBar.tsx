import React from 'react'
import {AppBar, Button, IconButton, Theme, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {drawerWidth} from "../drawer/Drawer";

interface Props {
    handleDrawerToggle: () => void;
}
export const NavBar: React.FC<Props> = ({handleDrawerToggle}: Props) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    return (
      <AppBar sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
      }}>
        <Toolbar>
            <IconButton
                sx={{mr: 2, display: {md: 'none'}}}
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={handleDrawerToggle}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant='h6' sx={{flexGrow: 1}}>
                hola
            </Typography>
            <Button color='inherit'>LOGIN</Button>
        </Toolbar>
      </AppBar>
  )
}
