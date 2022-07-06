import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Actors from './pages/Actors';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';

import './App.css';

const App = () => (
  <div style={{ display: 'flex', height: '100%' }}>
    <CssBaseline />
    <NavBar />
    <main style={{ flexGrow: 1, padding: '2em' }}>
      <div style={{ height: '70px' }} />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
