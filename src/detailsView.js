import { useState } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import "./detailsView.css";

export default function DetailsView() {
    const {id} = useParams();
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
            <div className="card">
                <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: "100%" }}></img>
                <h1>John Doe</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style={{ margin: "24px 0" }}>
                    <a href="#"><i className="fa fa-dribbble"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
                <p><button>Contact</button></p>
            </div>
        );
    }
}