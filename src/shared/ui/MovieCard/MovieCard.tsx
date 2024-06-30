import Image from 'next/image';
import styles from './MovieCard.module.css';
import { Rating } from '@/features/Rating/ui/Rating';
import Link from 'next/link';
import { useAppSelector } from '@/shared/model/hooks';
// import { RatingCSS } from '@/features/RatingCSS/RatingCSS';
export interface IMovieCard {
    id: string;
    title: string;
    description: string;
    rating: string;
    poster: string;
    genre: string;
    release_year: string;
}
export const MovieCard = ({
    id,
    title,
    description,
    // rating,
    poster,
    genre,
    release_year,
}: IMovieCard) => {
    const logged = useAppSelector((state) => state.auth.logged);
    return (
        <Link href={`movie/${id}`} className={styles.card}>
            <div className={styles.card_inner_wrapper}>
                <Image
                    src={poster}
                    width={100}
                    height={120}
                    alt=''
                    className={styles.card_poster}
                />
                <div className={styles.card_info_wrapper}>
                    <h3 className={styles.card_title}>{title}</h3>
                    <div className={styles.card_info_inner_wrapper}>
                        <div className={styles.card_info_name_col}>
                            <span className={styles.card_info_item_name}>Жанр</span>
                            <span className={styles.card_info_item_name}>Год выпуска</span>
                            <span className={styles.card_info_item_name}>Описание</span>
                        </div>
                        <div className={styles.card_info_value_col}>
                            <span className={styles.card_info_item_value}>{genre}</span>
                            <span className={styles.card_info_item_value}>{release_year}</span>
                            <span className={styles.card_info_item_value}>{description}</span>
                        </div>
                    </div>
                </div>
            </div>
            {logged && <Rating movieId={id} />}
        </Link>
    );
};
