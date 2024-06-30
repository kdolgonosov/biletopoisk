import { combineReducers } from '@reduxjs/toolkit';
// import { filterSlice } from 'features/catalog/FilterBar/model/slice';
import { filterSlice } from '@/features/Filter/model/slice';
import { searchStringSlice } from '@/features/SearchBar/model/slice';
// import { searchStringSlice, searchStringState } from '@/features/SearchBar/model/slice'
// import { productPageSlice } from 'entities/catalog/ProductList/model/slice';
import { moviesApi } from '@/shared/model/api';
import { movieListSlice } from '@/entities/MovieList/model/slice';
import { authSlice } from '@/features/LoginModal/model/slice';

export const rootReducer = combineReducers({
    [filterSlice.name]: filterSlice.reducer,
    [searchStringSlice.name]: searchStringSlice.reducer,
    [movieListSlice.name]: movieListSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
