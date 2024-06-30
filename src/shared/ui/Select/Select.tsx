import styles from './styles.module.css';
import { ReactNode, useRef, useState } from 'react';
import cn from 'classnames';
// import { ArrowDown, ArrowUp } from "@/shared/ui/icons";

interface SelectFieldProps {
    name: string;
    labelText: string;
    value: string;
    options: ReactNode;
    onSelect: (value: string) => void;
}

export const Select = ({ name, labelText, options, value, onSelect }: SelectFieldProps) => {
    console.log(name, value);
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const selectRef = useRef<HTMLSelectElement | null>(null);
    return (
        <div style={{ position: 'relative' }}>
            <label htmlFor={name} className={styles.selectLabel}>
                {labelText}
            </label>
            <select
                name={name}
                id={name}
                className={styles.selectField}
                value={value}
                onFocus={() => setIsOpened(true)}
                onBlur={() => setIsOpened(false)}
                ref={selectRef}
                onChange={(event) => {
                    event.currentTarget.blur();
                    onSelect(event.currentTarget?.value);
                }}
            >
                {options}
            </select>
            <span
                className={cn(styles.button, {
                    [styles.button_type_opened]: isOpened,
                })}
            >
                {/* {isOpened ? <ArrowUp width={18} height={18}/> : <ArrowDown width={18} height={18}/>} */}
            </span>
        </div>
    );
};
