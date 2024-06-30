import { Button } from '@/shared/ui/Button/Button';
import styles from './Header.module.css';
import { useState } from 'react';
import { LoginModal } from '@/features/LoginModal/ui/LoginModal';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { logout } from '@/features/LoginModal/model/slice';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const logged = useAppSelector((state) => state.auth.logged);
    const dispatch = useAppDispatch();
    return (
        <>
            {isOpen && <LoginModal handleOpen={setIsOpen} />}
            <header className={styles.header}>
                <a href='/' className={styles.logo}>
                    Фильмопоиск {logged}
                </a>
                {logged ? (
                    <div className={styles.wrapper}>
                        <span className={styles.avatar}></span>
                        <Button type='secondary' title='Выйти' onClick={() => dispatch(logout())} />
                    </div>
                ) : (
                    <Button type='accent' title='Войти' onClick={() => setIsOpen(true)} />
                )}
            </header>
        </>
    );
};

export default Header;
