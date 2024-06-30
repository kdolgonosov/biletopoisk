import styles from './TextInput.module.css';
import cn from 'classnames';

export const TextInput = ({ ...props }) => {
    return (
        <input
            {...props}
            className={cn(styles.input, {
                [styles.error]: props.error,
            })}
        />
    );
};
