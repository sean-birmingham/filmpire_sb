import { Grid } from '@mui/material';

import Movie from './Movie';

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, idx) => (
        <Movie key={idx} movie={movie} idx={idx} />
      ))}
    </Grid>
  );
};
export default MovieList;
