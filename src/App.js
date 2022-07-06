import { CssBaseline, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Actors from './pages/Actors';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';

const App = () => (
  <Box component="div" sx={{ display: 'flex', height: '100%' }}>
    <CssBaseline />
    <NavBar />
    <Box component="main" sx={{ flexGrow: 1, padding: '2em' }}>
      <Box component="div" sx={{ height: '70px' }} />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Box>
  </Box>
);

export default App;
