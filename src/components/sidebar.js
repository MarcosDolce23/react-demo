import React from 'react';
import "./components.css";

import { Link } from 'react-router-dom';

export default function Sidebar({ handleToggle, showed}) {
    
    if (!showed) {
        return <></>;
    } else {
        return (
            <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={{ display: "block", zIndex: "2", width: "40%", minWidth: "300px" }} id="mySidebar">
                <a onClick={handleToggle}
                    className="w3-bar-item w3-button">Close Menu</a>
                <Link onClick={handleToggle} className="w3-bar-item w3-button" to={'/contacts'}>Contacts</Link>
                <Link onClick={handleToggle} className="w3-bar-item w3-button" to={'/'}>Home</Link>
                <Link onClick={handleToggle} className="w3-bar-item w3-button" to={'/about'}>About</Link>
            </nav>
        )
    }
}