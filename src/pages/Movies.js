import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux/';

import { useGetMoviesQuery } from '../services/TMDB';
import MovieList from './MovieList';
import PageChange from '../components/PageChange';
import FeaturedMovie from '../components/FeaturedMovie';

const Movies = () => {
  const { genreIdOrCategoryName, searchQuery, page } = useSelector((state) => state.movies);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));

  const numberOfMovies = lg ? 17 : 19;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name. <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured.';

  return (
    <div>
      <FeaturedMovie movie={data.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <PageChange page={page} count={data.total_pages < 500 ? data?.total_pages : 500} />
    </div>
  );
};

export default Movies;
