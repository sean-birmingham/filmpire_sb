import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { useTheme } from '@mui/system';
import { Link } from 'react-router-dom';

const Movie = ({ movie, idx }) => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      sx={{ padding: '10px', textAlign: 'center' }}
    >
      <Grow in key={idx} timeout={(idx + 1) * 250}>
        <Link
          to={`/movie/${movie.id}`}
          style={{
            fontWeight: 'bolder',
            textDecoration: 'none',
          }}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://www.fillmurray.com/200/300'
            }
            alt={movie.title}
            className="movie-img"
          />
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              textOverflow: 'ellipsis',

              whiteSpace: 'nowrap',
              overflow: 'hidden',
              marginTop: '10px',
              marginBottom: 0,
            }}
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};
export default Movie;
