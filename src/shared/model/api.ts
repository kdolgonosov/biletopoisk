import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IProduct } from 'shared/model/interface';

// export interface ISearchParams {
//     title?: string;
//     page?: string
// }
// export interface ISearchResponse {
//     id: string
//     title: string;
//     description: string;
//     genre: string;
//     release_year: string;
//     actors: string;
//     rating: string;
//     total_rates_count: string
// }
// interface IMovie {
//     id: string;
//     title: string;
//     description: string;
//     genre: string;
//     release_year: string;
//     actors: string;
//     rating: string;
//     total_rates_count: string;
// }
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/api/v1' }),
    endpoints: (builder) => ({
        rateMovie: builder.mutation({
            query: ({ id, user_rate }: { id: string; user_rate: number }) => ({
                url: `/rateMovie`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: {
                    movieId: id,
                    user_rate,
                },
            }),
            async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(
                        moviesApi.util.updateQueryData('getMovie', { id }, (draft) => {
                            Object.assign(draft, { rating: data.newAverageRate });
                        }),
                    );
                } catch {}
            },
        }),
        getMovie: builder.query({
            query: ({ id }: { id: string }) => `/movie/${id}`,
        }),
        getMovies: builder.query({
            query: ({
                page,
                release_year,
                genre,
                title,
            }: {
                page?: number;
                release_year?: string;
                genre?: string;
                title?: string;
            }) =>
                `search?${page ? '&page=' + page : ''}${title ? '&title=' + title : ''}${
                    release_year !== '0' ? '&release_year=' + release_year : ''
                }${genre !== '0' ? '&genre=' + genre : ''}`,
        }),
    }),
});

// export const {
//     // useGetAllCategoriesQuery,
//     // useLazyGetTopProductsByCategoryQuery,
//     useGetProductsQuery,
//     // useGetProductQuery,
//     // useUpdateProductMutation,
// } = productsApi;
// export default productsApi;

// export const useGetProductsQuery = moviesApi.useGetProductQuery;
// export const {useGetMovieQuery} = moviesApi;
export default moviesApi;
