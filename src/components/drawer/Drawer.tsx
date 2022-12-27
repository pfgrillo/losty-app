import React from 'react'
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from "@mui/material/Drawer";
import {Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText} from "@mui/material";
import {deepPurple} from "@mui/material/colors";
import {NavLink} from "react-router-dom";
import {MyNavLink} from "../navLink/CustomNavLink";

interface Props {
    open?: boolean;
    handleDrawerClose?: () => void;
}

export const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));


export const DrawerStyled: React.FC<Props> = ({open, handleDrawerClose}: Props) => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const theme = useTheme();

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
      <Drawer variant="permanent" open={open}>
          <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
              {['Map', 'Found', 'Lost', 'Messages', 'Account', 'Logout'].map((text, index) => (
                  <ListItem component={MyNavLink} key={text} disablePadding sx={{ display: 'block' }} to={`/${text.toLowerCase()}`}>
                      <ListItemButton
                          selected={selectedIndex === index}
                          onClick={(event) => handleListItemClick(event, index)}
                          sx={{
                              m: theme.spacing(2),
                              height: 40,
                              justifyContent: open ? 'initial' : 'center',
                              borderRadius: 2,
                              color: selectedIndex === index ? theme.palette.primary.main : theme.palette.secondary.main,
                              '&:hover': {
                                  color: theme.palette.primary.main,
                                  backgroundColor: deepPurple[50],
                              },
                              '&.Mui-selected': {
                                  fontWeight: 500,
                                  backgroundColor: deepPurple[50],
                              },
                          }}
                      >
                          <ListItemIcon
                              sx={{
                                  minWidth: 0,
                                  mr: open ? 3 : 'auto',
                                  justifyContent: 'center',
                                  color: 'inherit',
                                  '& :hover': { color: theme.palette.primary.main },
                              }}
                          >
                              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />

                      </ListItemButton>
                  </ListItem>
              ))}
          </List>
          <Divider />
      </Drawer>
  )
}
