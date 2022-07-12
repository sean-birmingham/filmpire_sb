import { createSlice } from '@reduxjs/toolkit';

export const genreOrCategory = createSlice({
  name: 'genreOrCategory',
  initialState: {
    page: 1,
    genreIdOrCategoryName: 'popular',
    searchQuery: '',
  },
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
      state.searchQuery = '';
      state.page = 1;
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
      state.page = 1;
    },
    selectPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie, selectPage } = genreOrCategory.actions;

export default genreOrCategory.reducer;
