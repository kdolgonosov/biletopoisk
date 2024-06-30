import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

export const Modal = ({ children }: any) => {
    return createPortal(
        <div className={styles.modal}>
            <div className={styles.wrapper}>{children}</div>
        </div>,
        document.body,
    );
};
