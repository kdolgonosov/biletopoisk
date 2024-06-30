'use client';
import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import moviesApi from '@/shared/model/api';

export const Rating = ({ movieId }: Props) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [mutate] = moviesApi.useRateMovieMutation();
    const handleRating = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
        e.preventDefault();
        setRating(value);
        mutate({ id: movieId, user_rate: value });
        storeRatingInLocalStorage(movieId, value);
    };
    const handleMouseEnter = (rate: number) => {
        setHoverRating(rate);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };
    const storeRatingInLocalStorage = (movieId: string, rating: number) => {
        const ratings = JSON.parse(localStorage.getItem('ratings') || '{}') || {};
        ratings[movieId] = rating;
        localStorage.setItem('ratings', JSON.stringify(ratings));
    };
    const isHovering = hoverRating > 0;

    useEffect(() => {
        const ratings = JSON.parse(localStorage.getItem('ratings') || '{}') || {};
        const rating = ratings[movieId];

        if (rating) {
            setRating(rating);
        }
    }, [movieId]);

    return (
        <div className={styles.container}>
            {[1, 2, 3, 4, 5].map((value) => (
                <div
                    key={value}
                    className={styles.rating}
                    onClick={(e) => handleRating(e, value)}
                    onMouseEnter={() => handleMouseEnter(value)}
                    onMouseLeave={handleMouseLeave}
                >
                    <span
                        className={cn(styles.star, {
                            [styles.hovered]: isHovering && value <= hoverRating,
                            [styles.filled]: !isHovering && value <= rating,
                        })}
                    ></span>
                    <span
                        className={cn(styles.number, {
                            [styles.number_filled]: !isHovering && value <= rating,
                        })}
                    >
                        {value}
                    </span>
                </div>
            ))}
        </div>
    );
};

type Props = {
    movieId: string;
};
