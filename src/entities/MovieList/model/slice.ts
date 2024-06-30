import { createSlice } from '@reduxjs/toolkit';
export interface MovieListState {
    page: number;
}
const initialState = {
    page: 1,
} as MovieListState;

export const movieListSlice = createSlice({
    name: 'movieListPage',
    initialState,
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
        decrementPage: (state) => {
            state.page -= 1;
        },
        resetPage: (state) => {
            state.page = 1;
        },
    },
});
// console.log(movieListSlice.actions);
export const { incrementPage, decrementPage, resetPage } = movieListSlice.actions;
