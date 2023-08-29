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

//Ejercicio 1
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Tarjeta({ items, handleOpen }) {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {items.results.map((item, i) => (
        <ImageListItem onClick={() => handleOpen(i)}>
          <img
            src={`${item.image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar position="below" title={item.name} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
// Fin ejercicio 1

// function Tarjeta({ items, handleOpen }) {
//   return (
//     <ImageList variant="masonry" cols={3} gap={8}>
//       {items.results.map((item, i) => (
//         <Link key={item.id} to={"/details/" + item.id}>
//           <ImageListItem onClick={() => handleOpen(i)}>
//             <img
//               src={`${item.image}?w=248&fit=crop&auto=format`}
//               srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               alt={item.name}
//               loading="lazy"
//             />
//             <ImageListItemBar position="below" title={item.name} />
//           </ImageListItem>
//         </Link>
//       ))}
//     </ImageList>
//   );
// };

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState(null);

  // Ejercicio 1
  const [open, setOpen] = useState(false);
  const [selectCharacter, setSelectedCharacter] = useState(null);

  const handleClickOpen = (index) => {
    handleSelectCharacter(index);
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleSelectCharacter = (index) => {
    setSelectedCharacter(characters.results[index].id);
  };
  // Fin ejercicio 1

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
          <Tarjeta items={characters} handleOpen={handleClickOpen} />
        </Box>
        <MyDialog isOpen={open} handleClose={handleClickClose} id={selectCharacter} />
        <Pagination prevPage={prevPage} nextPage={nextPage}></Pagination>
      </>
    );
  }
}

export default App;


// ejercicio 1

function MyDialog({ isOpen, handleClose, id }) {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"¿Cuál es el ID de este personaje?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {id}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};