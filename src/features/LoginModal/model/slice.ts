'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { useEffect } from 'react';
export const userLogin = createAsyncThunk<
    { token: string },
    { username: string; password: string },
    { rejectValue: unknown }
>('auth/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:3030/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        localStorage.setItem('token', data.token);
        return data.token;
    } catch (error) {
        return rejectWithValue(error);
    }
});
// let token, logged = '', false
// useEffect(() => {
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const logged = localStorage.getItem('token') ? true : false;

// }, [])
const initialState = {
    loading: false,
    //   userInfo: null,
    logged,
    token,
    error: null,
    //   success: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            state.logged = false;
            state.token = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.logged = true;
                //   state.userInfo = payload
                state.token = payload.token;
            })
            .addCase(userLogin.rejected, (state) => {
                state.loading = false;
                state.logged = false;
                // state.error = payload
            }),
});

// export default authSlice.reducer;
export const { logout } = authSlice.actions;
