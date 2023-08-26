import { useState } from 'react';
import { useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Sidebar from './components/sidebar';
import TopMenu from './components/topMenu';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Tarjeta({ items, handleOpen }) {
  return (
    items.results.map((item, i) => (
      <Grid key={item.id} item xs={12} onClick={() => handleOpen(i)}>
        <Item>
          <Grid container wrap='nowrap' spacing={2}>
            <Grid item>
              <Avatar alt={item.name} src={item.image} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{item.name}</Typography>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    ))
  );
};

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

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState(null);
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
        <Sidebar></Sidebar>
        <TopMenu></TopMenu>
        <Box sx={{ width: '100%', marginTop: "100px" }} className="w3-main w3-content w3-padding">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Tarjeta items={characters} handleOpen={handleClickOpen} />
          </Grid>
          <MyDialog isOpen={open} handleClose={handleClickClose} id={selectCharacter} />
        </Box>
      </>
    );
  }
}

export default App;
