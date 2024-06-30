import React from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <main className={styles.layout}>
            <Outlet />
        </main>
    );
};
