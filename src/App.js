import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import TopMenu from './components/topMenu';
import Pagination from './components/paginations';

import { Link } from 'react-router-dom';

function Tarjeta({ items, handleOpen }) {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {items.results.map((item, i) => (
        <Link key={item.id} to={"/details/" + item.id}>
          <ImageListItem>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.name} />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
};

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState(null);

  const prevPage = () => {
    if (!characters.info.prev)
      return

    fetch(characters.info.prev)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  };

  const nextPage = () => {
    if (!characters.info.next)
      return

    fetch(characters.info.next)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
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
        <Box className="w3-main w3-content w3-padding">
          <Tarjeta items={characters} />
        </Box>
        <Pagination prevPage={prevPage} nextPage={nextPage}></Pagination>
      </>
    );
  }
}

export default App;
