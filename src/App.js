import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState(null);

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
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
        {characters.results.map(item => (
          <StyledPaper sx={{ my: 1, mx: 'auto', p: 2 }}>
          <Grid container wrap="nowrap" spacing={2}>
            {/* <Grid item>
              <Avatar>W</Avatar>
            </Grid> */}
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{item.name}</Typography>
            </Grid>
          </Grid>
        </StyledPaper>
        ))}
      </Box>
    );
  }
}

export default App;
