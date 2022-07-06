import { Grid } from '@mui/material';
import { useTheme } from '@mui/system';

import Movie from './Movie';

const MovieList = ({ movies }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        },
      }}
    >
      {movies.results.map((movie, idx) => (
        <Movie key={idx} movie={movie} idx={idx} />
      ))}
    </Grid>
  );
};
export default MovieList;
