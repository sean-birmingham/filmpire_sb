import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';
import moviesReducer from '../features/movieSlice';
import userReducer from '../features/authSlice';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    movies: moviesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
