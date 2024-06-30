import React from 'react';
import styles from './ActorCard.module.css';

export interface IActor {
    photo: string;
    name: string;
}
export const ActorCard = ({ photo, name }: IActor) => {
    return (
        <div className={styles.container}>
            <img src={photo} alt={name} className={styles.poster} />
            <span className={styles.span}>{name}</span>
        </div>
    );
};
