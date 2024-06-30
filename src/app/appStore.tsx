'use client';
import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rootReducer } from './rootReducer';
import { moviesApi } from '@/shared/model/api';
// import { productsApi } from 'shared/model/api';

// const appStore = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
// });
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
    });
};
setupListeners(makeStore().dispatch);
// export type AppDispatch = typeof appStore.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;

// export default appStore;

// import { configureStore } from '@reduxjs/toolkit'

// export const makeStore = () => {
//   return configureStore({
//     reducer: {},
//   })
// }

// // Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
