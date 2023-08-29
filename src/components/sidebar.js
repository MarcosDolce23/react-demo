import React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';

export default function Sidebar({ handleToggle, showed }) {

    return (
        <SwipeableDrawer open={showed} onClose={handleToggle} onOpen={handleToggle} >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                // onClick={handleToggle}
            >
                <List>
                    <ListItem key={"Home"} disablePadding>
                        <Link onClick={handleToggle} to={'/'}>
                            <ListItemButton>
                                <ListItemText primary={"Home"} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key={"About"} disablePadding>
                        <Link onClick={handleToggle} to={'/about'}>
                            <ListItemButton>
                                <ListItemText primary={"Sobre mi"} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <ListItem key={"Contact"} disablePadding>
                        <Link onClick={handleToggle} to={'/contacts'}>
                            <ListItemButton>
                                <ListItemText primary={"Contacto"} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </SwipeableDrawer>
    )
}