import { useState, useId, type FC } from 'react';
import cls from './checkbox.module.scss';
import { FormI } from '../types';

interface CheckboxProps extends TypedOmit<FormI, 'Icon' | 'value'> {
    /** Callback that is called when the checkbox changes */
    onChecked?: (isChecked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = props => {
    const { className, onChecked, label } = props;
    const [isChecked, setIsChecked] = useState(false);
    const id = useId();

    const onChangeHandler = () => {
        setIsChecked(!isChecked);
        onChecked?.(!isChecked);
    };

    return (
        <div className={className}>
            <input
                type="checkbox"
                className={cls.checkbox}
                id={id}
                checked={isChecked}
                onChange={onChangeHandler}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    );
};
