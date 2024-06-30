import styles from './NothingFound.module.css';

export const NothingFound = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Фильмы не найдены</span>
            <span className={styles.text}>Измените запрос и попробуйте снова</span>
        </div>
    );
};
