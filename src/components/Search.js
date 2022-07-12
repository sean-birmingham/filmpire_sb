import { useState } from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { searchMovie } from '../features/movieSlice';

const Search = () => {
  const [query, setQuery] = useState('');

  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      dispatch(searchMovie(query));
      setQuery('');
      navigate('/');
    }
  };

  return (
    <Box
      sx={{
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        },
      }}
    >
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        sx={{
          color: theme.palette.mode === 'light' && 'black',
          filter: theme.palette.mode === 'light' && 'invert(1)',
          [theme.breakpoints.down('sm')]: {
            marginTop: '-10px',
            marginBottom: '10px',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default Search;
