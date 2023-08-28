import React from 'react';
import { useState } from 'react';

import Sidebar from "./sidebar";
import "./components.css";

export default function TopMenu() {

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }

    return (
        <>
            <Sidebar handleToggle={toggleSidebar} showed={showSidebar}></Sidebar>
            <div className="w3-top">
                <div className="w3-white w3-xlarge" style={{ maxWidth: "1200px", margin: "auto" }}>
                    <div className="w3-button w3-padding-16 w3-left" onClick={toggleSidebar}>☰</div>
                    <div className="w3-right w3-padding-16">Marcos Dolce</div>
                    <div className="w3-center w3-padding-16">React Demo GL</div>
                </div>
            </div>
        </>
    )
}