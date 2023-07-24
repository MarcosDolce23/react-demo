import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItems] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
      <ul>
        {item.results.map(item => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
