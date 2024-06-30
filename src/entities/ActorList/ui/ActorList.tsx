'use client';
import React, { useRef } from 'react';
import cn from 'classnames';
import styles from './ActorList.module.css';
import { ActorCard, IActor } from '@/shared/ui/ActorCard/ActorCard';

export const ActorList = (actors: IActor[]) => {
    console.log(actors);
    const ref = useRef<HTMLDivElement>(null);

    // const scroll = () => {
    //   ref.scrollX += 20;
    // };
    const scroll = (scrollOffset: number) => {
        if (ref.current) {
            ref.current.scrollLeft += scrollOffset;
        }
    };
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Актеры</h2>
            <div className={styles.list} ref={ref}>
                {Object.values(actors).map((actor: IActor, i: number) => (
                    <ActorCard key={i} {...actor} />
                ))}
                <button
                    className={cn(styles.button, styles.button_prev)}
                    onClick={() => scroll(-200)}
                ></button>
                <button
                    className={cn(styles.button, styles.button_next)}
                    onClick={() => scroll(+200)}
                ></button>
            </div>
        </section>
    );
};
