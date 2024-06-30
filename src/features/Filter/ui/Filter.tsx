import { ChangeEvent } from 'react';
import styles from './Filter.module.css';
import { useAppDispatch } from '@/shared/model/hooks';
import { setGenre, setYear } from '../model/slice';
import { resetPage } from '@/entities/MovieList/model/slice';
import { useSearchParams } from 'react-router-dom';

type Genre =
    | '0'
    | 'comedy'
    | 'drama'
    | 'action'
    | 'thriller'
    | 'horror'
    | 'family'
    | 'cartoon'
    | 'fantasy'
    | 'romance'
    | 'adventure'
    | 'musical'
    | 'war';

const genres: Record<Genre, string> = {
    '0': 'Не выбран',
    comedy: 'Комедия',
    drama: 'Драма',
    action: 'Боевик',
    thriller: 'Триллер',
    horror: 'Ужасы',
    family: 'Семейный',
    cartoon: 'Анимированный',
    fantasy: 'Фэнтези',
    romance: 'Романтика',
    adventure: 'Приключения',
    musical: 'Мюзикл',
    war: 'Военный',
};

type Year = '0' | '2009' | '2008' | '2007' | '2006' | '1990-2005' | '1950-1989';

const years: Record<Year, string> = {
    '0': 'Не выбран',
    '2009': '2009',
    '2008': '2008',
    '2007': '2007',
    '2006': '2006',
    '1990-2005': '1990-2005',
    '1950-1989': '1950-1989',
};
export const Filter = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const handleSetGenreFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGenre(e.target.value));
        if (e.target.value !== '0') {
            searchParams.set('genre', e.target.value);
            setSearchParams(searchParams);
        } else {
            searchParams.delete('genre');
            setSearchParams(searchParams);
        }
        dispatch(resetPage());
    };
    const handleSetYearFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setYear(e.target.value));
        if (e.target.value !== '0') {
            searchParams.set('year', e.target.value);
            setSearchParams(searchParams);
        } else {
            searchParams.delete('year');
            setSearchParams(searchParams);
        }
        dispatch(resetPage());
    };
    return (
        <div className={styles.filter}>
            <h3 className={styles.title}>Фильтр</h3>
            <div className={styles.select_wrapper}>
                <label htmlFor='genre' className={styles.select_label}>
                    Жанр
                </label>
                <select
                    onChange={(e) => handleSetGenreFilter(e)}
                    id='genre'
                    className={styles.select}
                >
                    {Object.entries(genres).map(([key, value], i) => (
                        <option value={key} key={i} className={styles.option}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.select_wrapper}>
                <label htmlFor='year' className={styles.select_label}>
                    Год
                </label>
                <select
                    onChange={(e) => handleSetYearFilter(e)}
                    id='year'
                    className={styles.select}
                >
                    {Object.entries(years).map(([key, value], i) => (
                        <option value={key} key={i} className={styles.option}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

// export Filter;
