import React from 'react';
import "./components.css";

export default function Pagination({ prevPage, nextPage }) {

    return (
        <div className="w3-center w3-padding-32">
            <div className="w3-bar">
                <span className="w3-bar-item w3-button w3-hover-black" onClick={prevPage}>«</span>
                <span className="w3-bar-item w3-button w3-hover-black" onClick={nextPage}>»</span>
            </div>
        </div>
    )
}