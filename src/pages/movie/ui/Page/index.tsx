import React from 'react';
import { useParams } from 'react-router-dom';
import moviesApi from '@/shared/model/api';
import { MoviePageCard } from '@/shared/ui/MoviePageCard/MoviePageCard';
import { ActorList } from '@/entities/ActorList/ui/ActorList';
import { Loader } from '@/shared/ui/Loader/Loader';

export const MoviePage = () => {
    const { movieId } = useParams();
    if (movieId === undefined) return null;
    const { data, error, isLoading, isFetching } = moviesApi.useGetMovieQuery({ id: movieId });
    if (isLoading && isFetching) return <Loader />;
    return (
        <>
            {/* <Loader /> */}
            <MoviePageCard {...data} />
            <ActorList {...data.actors} />
        </>
    );
};
