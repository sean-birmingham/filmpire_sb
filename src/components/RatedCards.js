import { Typography, Box } from '@mui/material';
import Movie from '../pages/Movie';

const RatedCards = ({ title, data }) => (
  <Box>
    <Typography variant="h5" gutterBottom>
      {data?.results.length === 0 ? '' : title}
    </Typography>
    <Box display="flex" flexWrap="wrap">
      {data?.results.map((movie, idx) => (
        <Movie key={movie.id} movie={movie} idx={idx} />
      ))}
    </Box>
  </Box>
);
export default RatedCards;
