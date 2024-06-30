import { createSlice } from '@reduxjs/toolkit';
export interface FilterState {
    selectedGenre: string;
    selectedYear: string;
}
const initialState = {
    selectedGenre: '0',
    selectedYear: '0',
} as FilterState;

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setGenre: (state, action) => {
            state.selectedGenre = action.payload;
        },

        setYear: (state, action) => {
            state.selectedYear = action.payload;
        },
    },
});

export const { setGenre, setYear } = filterSlice.actions;
