import { Modal, Typography, Button, ButtonGroup, Grid, Box, CircularProgress, useMediaQuery, Rating } from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import axios from 'axios';

import { useGetMovieQuery } from '../services/TMDB';
import { selectGenreOrCategory } from '../features/currentGenreOrCategory';
import genreIcons from '../assets/genres';

const MovieInfo = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const theme = useTheme();
  const dispatch = useDispatch();

  const isMovieFav = false;
  const isMovieWatchListed = false;

  const addToFavorites = () => {};

  const addToWatchList = () => {};

  if (isFetching) {
    <Box display="flex" justifyContent="center">
      <CircularProgress size="8rem" />
    </Box>;
  }

  if (error) {
    <Box display="flex" justifyContent="center">
      <Link to="/">Something has gone wrong. Go back.</Link>
    </Box>;
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: 'space-around',
        margin: '10px 0 !important',
      }}
    >
      <Grid item sm={12} lg={4} display="flex" justifyContent="center" alignItems="start">
        <Box
          component="img"
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
          sx={{
            borderRadius: '20px',
            boxShadow: '0.5em 1em 1em rgb(64,64,70)',
            width: '80%',
            [theme.breakpoints.down('lg')]: {
              marginBottom: '30px',
            },
            [theme.breakpoints.down('md')]: {
              margin: '0 auto',
              width: '50%',
              height: '350px',
              marginBottom: '30px',
            },
            [theme.breakpoints.down('sm')]: {
              margin: '0 auto',
              width: '100%',
              height: '350px',
              marginBottom: '30px',
            },
          }}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.title} ({data?.release_date.split('-')[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid
          item
          sx={{
            justifyContent: 'space-around',
            margin: '10px 0 !important',
          }}
        >
          <Box display="flex" justifyContent="center">
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography variant="subtitle1" gutterBottom style={{ marginLeft: '10px' }}>
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime} min /{' '}
            {data?.spoken_languages
              .map((language) => language.name)
              .join(', ')
              .replace('广州话 / 廣州話', 'Cantonese')}
          </Typography>
        </Grid>
        <Grid item sx={{ margin: '10px 0 !important', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {data?.genres?.map((genre, i) => (
            <Link
              to="/"
              key={i}
              style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              onClick={() => dispatch(selectGenreOrCategory(genre.id))}
            >
              <Box
                component="img"
                src={genreIcons[genre.name.toLowerCase()]}
                alt="genre icon"
                height={30}
                sx={{ filter: theme.palette.mode === 'dark' && 'invert(1)', marginRight: '10px' }}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre?.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: '2rem' }}>{data?.overview}</Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid item container spacing={2}>
          {data &&
            data?.credits?.cast
              .map(
                (character, i) =>
                  character.profile_path && (
                    <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }}>
                      <Box
                        component="img"
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt={character.name}
                        sx={{ width: '100%', borderRadius: '10px' }}
                      />
                      <Typography color="textPrimary">{character?.name}</Typography>
                      <Typography color="textSecondary">{character.character.split('/')[0]}</Typography>
                    </Grid>
                  ),
              )
              .slice(0, 6)}
        </Grid>
        <Grid item container style={{ marginTop: '2rem' }}>
          <Box
            component="div"
            sx={{
              display: 'flex',
              width: '100%',
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
              },
            }}
          >
            <Grid item xs={12} sm={6}>
              <ButtonGroup size="medium" variant="outlined">
                <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>
                  Website
                </Button>
                <Button target="_blank" rel="noopener noreferrer" href={`https://imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>
                  IMDB
                </Button>
                <Button href="#" endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ButtonGroup size="medium" variant="outlined">
                <Button onClick={addToFavorites} endIcon={isMovieFav ? <FavoriteBorderOutlined /> : <Favorite />}>
                  {isMovieFav ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button onClick={addToWatchList} endIcon={isMovieWatchListed ? <Remove /> : <PlusOne />}>
                  Watchlist
                </Button>
                <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
                  <Typography component={Link} to="/" color="inherit" variant="subtitle2" style={{ textDecoration: 'none' }}>
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MovieInfo;
