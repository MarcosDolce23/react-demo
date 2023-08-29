import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import TopMenu from "./components/topMenu";

import { useParams } from 'react-router-dom';

import "./detailsView.css";

export default function DetailsView() {
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCharacter(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {

        return (
            <>
                <TopMenu></TopMenu>
                <div style={{ marginTop: "30px" }}>
                    <div className="card">
                        <img src={character.image} alt="John" style={{ width: "100%" }}></img>
                        <h1>{character.name}</h1>
                        <p >{character.status}</p>
                        <p>{character.species}</p>
                        <p>{character.gender}</p>
                        <p className='button'>{character.origin.name}</p>
                    </div>
                </div>
            </>
        );
    }
}