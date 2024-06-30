'use client';
import { ChangeEvent, useState } from 'react';
import styles from './SearchBar.module.css';
import { useAppDispatch } from '@/shared/model/hooks';
import { useDebouncedCallback } from 'use-debounce';
import { setSearchString } from '../model/slice';
import { resetPage } from '@/entities/MovieList/model/slice';
import { useSearchParams } from 'next/navigation';

export const SearchBar = () => {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState('');
    // let [searchParams, setSearchParams] = useSearchParams();
    const searchParams = useSearchParams();
    function updateParams(value: string) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('title', value);
        if (value.length === 0) {
            params.delete('title');
        }
        window.history.pushState(null, '', `/search?${params.toString()}`);
    }
    const debounced = useDebouncedCallback((value) => {
        dispatch(resetPage());
        updateParams(value);
        // if (value.length > 0) {
        //     searchParams.set('title', value);
        //     setSearchParams(searchParams);
        // } else {
        //     searchParams.delete('title');
        //     setSearchParams(searchParams);
        // }
        dispatch(setSearchString(value));
    }, 700);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        debounced(e.target.value);
    };
    return (
        <div className={styles.wrapper}>
            <input
                type='text'
                className={styles.input}
                onChange={handleChange}
                placeholder='Название фильма'
                value={inputValue}
            />
            {inputValue.length > 0 && (
                <button
                    className={styles.button}
                    onClick={() => {
                        debounced('');
                        setInputValue('');
                    }}
                ></button>
            )}
        </div>
    );
};
