import { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Pagination, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetActorQuery, useGetMoviesByActorIdQuery } from '../services/TMDB';
import MovieList from './MovieList';
import PageChange from '../components/PageChange';

const Actors = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isFetching, error } = useGetActorQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    <Box display="flex" justifyContent="center">
      <CircularProgress size="8rem" />
    </Box>;
  }

  if (error) {
    <Box display="flex" justifyContent="center">
      <Button startIcon={<ArrowBack />} onclick={() => navigate(-1)}>
        Go back
      </Button>
    </Box>;
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xl={4} lg={5}>
          <Box
            component="img"
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
            sx={{
              borderRadius: '20px',
              boxShadow: '0.5em 1em 1em rgb(64,64,70)',
              width: '90%',
              objectFit: 'cover',
            }}
          />
        </Grid>
        <Grid item xl={8} lg={7} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'Sorry, no biography yet...'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
              Go Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <PageChange page={page} setPage={setPage} count={movies?.total_pages} />
      </Box>
    </>
  );
};
export default Actors;
