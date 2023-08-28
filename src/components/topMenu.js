import * as React from 'react';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from './sidebar';

// import Sidebar from "./sidebar";
// import "./components.css";

// export default function TopMenu() {

//     const [showSidebar, setShowSidebar] = useState(false);

//     const toggleSidebar = () => {
//         setShowSidebar(!showSidebar);
//     };

//     function w3_open() {
//         document.getElementById("mySidebar").style.display = "block";
//     }

//     return (
//         <>
//             <Sidebar handleToggle={toggleSidebar} showed={showSidebar}></Sidebar>
//             <div className="w3-top">
//                 <div className="w3-white w3-xlarge" style={{ maxWidth: "1200px", margin: "auto" }}>
//                     <div className="w3-button w3-padding-16 w3-left" onClick={toggleSidebar}>☰</div>
//                     <div className="w3-right w3-padding-16">Marcos Dolce</div>
//                     <div className="w3-center w3-padding-16">React Demo GL</div>
//                 </div>
//             </div>
//         </>
//     )
// }


export default function TopMenu() {

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Sidebar handleToggle={toggleSidebar} showed={showSidebar}></Sidebar>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        GL React Demo
                    </Typography>
                    <Typography color="inherit">Marcos</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}