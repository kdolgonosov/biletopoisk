import React from 'react';
import styles from './MoviePageCard.module.css';
import { useAppSelector } from '@/shared/model/hooks';
import { Rating } from '@/features/Rating/ui/Rating';

export interface IMoviePageCard {
    id: string;
    title: string;
    description: string;
    genre: string;
    release_year: string;
    rating: string;
    poster: string;
}
export const MoviePageCard = ({
    id,
    title,
    description,
    genre,
    release_year,
    rating,
    poster,
}: IMoviePageCard) => {
    const logged = useAppSelector((state) => state.auth.logged);
    return (
        <div className={styles.card}>
            <img src={poster} alt='' className={styles.poster} />
            <div className={styles.card_info}>
                <h1 className={styles.card_info_title}>{title}</h1>
                <span className={styles.card_info_item}>
                    <span className={styles.card_info_item_bold}>Жанр:</span>&nbsp;{genre}
                </span>
                <span className={styles.card_info_item}>
                    <span className={styles.card_info_item_bold}>Год выпуска:</span>&nbsp;
                    {release_year}
                </span>
                <span className={styles.card_info_item}>
                    <span className={styles.card_info_item_bold}>Рейтинг:</span>&nbsp;{rating}
                </span>
                <span className={styles.card_info_item}>
                    <span className={styles.card_info_item_bold}>Описание</span>
                </span>
                <p className={styles.card_info_text}>{description}</p>
            </div>
            {logged && <Rating movieId={id} />}
        </div>
    );
};
