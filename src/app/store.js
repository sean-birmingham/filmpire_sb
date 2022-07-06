import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
  },
});
