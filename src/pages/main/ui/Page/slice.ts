import { createSlice } from '@reduxjs/toolkit';
interface ProductPageState {
    page: number;
}
const initialState = {
    page: 1,
} as ProductPageState;

export const productPageSlice = createSlice({
    name: 'productPage',
    initialState,
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
        resetPage: (state) => {
            state.page = 1;
        },
    },
});

export const { incrementPage, resetPage } = productPageSlice.actions;
