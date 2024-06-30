import { Modal } from '@/shared/ui/Modal/Modal';
import styles from './LoginModal.module.css';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/model/hooks';
import { useState } from 'react';
import { userLogin } from '../model/slice';
import { TextInput } from '@/shared/ui/TextInput/TextInput';

export const LoginModal = ({ handleOpen }: any) => {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const submitForm = () => {
        dispatch(userLogin({ username, password }))
            .then((result) => {
                handleOpen(false);
            })
            .catch((error) => {
                console.log(error);
                setError(true);
            });
    };
    return (
        <Modal>
            <div className={styles.modal_header}>
                <h3>Авторизация</h3>
                <button className={styles.close_button} onClick={() => handleOpen(false)}></button>
            </div>
            {/* form */}
            <div className={styles.form}>
                <label htmlFor='' className={styles.label}>
                    Логин
                </label>
                <TextInput
                    type='text'
                    value={username}
                    placeholder='Введите логин'
                    onChange={(e: any) => setUsername(e.target.value)}
                    error={error}
                />
                <label htmlFor='' className={styles.label}>
                    Пароль
                </label>

                <TextInput
                    type='text'
                    value={password}
                    placeholder='Введите пароль'
                    onChange={(e: any) => setPassword(e.target.value)}
                    error={error}
                />
                <div className={styles.buttons}>
                    <Button type='accent' title='Войти' onClick={() => submitForm()} />
                    <Button type='secondary' title='Отменить' onClick={() => handleOpen(false)} />
                </div>
            </div>
        </Modal>
    );
};
