import { useRef } from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Actors from './pages/Actors';
import Movies from './pages/Movies';
import MovieInfo from './pages/MovieInfo';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import useAlan from './components/Alan';

import './App.css';

const App = () => {
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <NavBar />
      <main style={{ flexGrow: 1, padding: '2em', width: '100%' }}>
        <div style={{ height: '70px' }} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
