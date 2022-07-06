import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { useTheme } from '@mui/system';
import { Link } from 'react-router-dom';

const Movie = ({ movie, idx }) => {
  const theme = useTheme();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ padding: '10px' }}>
      <Typography
        variant="h5"
        sx={{
          color: theme.palette.text.primary,
          textOverflow: 'ellipsis',
          width: '230px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          mt: 10,
          mb: 0,
          textAlign: 'center',
        }}
      >
        {movie.title}
      </Typography>
    </Grid>
  );
};
export default Movie;
