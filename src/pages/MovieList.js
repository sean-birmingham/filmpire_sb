import { Grid } from '@mui/material';

import Movie from './Movie';

const MovieList = ({ movies }) => (
  <Grid container>
    {movies.results.map((movie, idx) => (
      <Movie key={idx} movie={movie} idx={idx} />
    ))}
  </Grid>
);
export default MovieList;
