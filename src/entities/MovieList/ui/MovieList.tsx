import React from 'react';
import styles from './MovieList.module.css';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import moviesApi from '@/shared/model/api';
import { incrementPage, decrementPage } from '../model/slice';
import cn from 'classnames';
import { IMovieCard, MovieCard } from '@/shared/ui/MovieCard/MovieCard';
import { Loader } from '@/shared/ui/Loader/Loader';
import { NothingFound } from '@/shared/ui/NothingFound/NothingFound';

export const MovieList = () => {
    const page = useAppSelector((state) => state.movieListPage.page);
    const genre = useAppSelector((state) => state.filter.selectedGenre);
    const release_year = useAppSelector((state) => state.filter.selectedYear);
    const title = useAppSelector((state) => state.searchString.searchString);
    const dispatch = useAppDispatch();
    const { data, error, isLoading, isFetching } = moviesApi.useGetMoviesQuery({
        page,
        genre,
        release_year,
        title,
    });
    // const products: IData = isFetching && page === 1 ? null : data;

    if (error) return <p>Error!</p>;
    if (isLoading || isFetching) return <Loader />;
    if (data.search_result.length === 0) return <NothingFound />;
    return (
        <>
            {data.search_result.length === 0 && <p>Ничего не найдено</p>}
            {!isLoading &&
                !isFetching &&
                data.search_result.map((movie: IMovieCard, i: number) => (
                    <MovieCard key={i} {...movie} />
                ))}

            <div className={styles.pagination}>
                <button
                    onClick={() => dispatch(decrementPage())}
                    className={cn(styles.pagination_button, styles.pagination_button_type_prev)}
                    disabled={page === 1}
                ></button>
                <span className={styles.pagination_page}>{page}</span>
                <button
                    onClick={() => dispatch(incrementPage())}
                    className={cn(styles.pagination_button, styles.pagination_button_type_next)}
                    disabled={page === data.total_pages}
                ></button>
            </div>
        </>
        // </div>
    );
};
