import styles from './ActorCard.module.css';
import Image from 'next/image';

export interface IActor {
    photo: string;
    name: string;
}
export const ActorCard = ({ photo, name }: IActor) => {
    return (
        <div className={styles.container}>
            <Image src={photo} width={160} height={229} alt={name} className={styles.poster} />
            {/* <img src={photo} alt={name} className={styles.poster} /> */}
            <span className={styles.span}>{name}</span>
        </div>
    );
};
