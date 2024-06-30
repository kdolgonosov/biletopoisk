import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

type Props = {
    type: 'accent' | 'secondary';
    title: string;
    addStyle?: {
        [key: string]: string;
    };
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ type, title, addStyle, disabled, onClick }: Props) => {
    return (
        <button
            className={cn(styles.button, styles[`button_type_${type}`])}
            style={addStyle}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};
