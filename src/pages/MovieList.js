import { Grid } from '@mui/material';

import Movie from './Movie';

const MovieList = ({ movies, numberOfMovies }) => (
  <Grid container>
    {movies.results.slice(0, numberOfMovies).map((movie, idx) => (
      <Movie key={idx} movie={movie} idx={idx} />
    ))}
  </Grid>
);
export default MovieList;
