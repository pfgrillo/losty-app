import React, {useState} from 'react'
import {NavBar} from "../navbar/NavBar";
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {DrawerComponent, drawerWidth} from "../drawer/Drawer";

interface Props { }

const Content = styled('div')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
}));

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export const Container: React.FC<Props> = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
      return (
          <div style={{display: 'flex'}}>
              <NavBar
                  handleDrawerToggle={handleDrawerToggle}
              />
              <DrawerComponent
                  variant="temporary"
                  open={open}
                  onClose={handleDrawerToggle}
                  sx={{
                      display: { xs: 'block', md: 'none' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                      '& .MuiBox-root': { width: drawerWidth },
                  }}
              />
              <DrawerComponent
                  variant="permanent"
                  sx={{
                      display: { xs: 'none', md: 'block' },
                      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                  open
              />
              <Content>
                  <Offset/>
                  <div>mejor ponog ootra cosa</div>
                  <Button>tocame</Button>
              </Content>
          </div>
      )
}
