import type { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';
import type { FormI } from '../types';
import { useId } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './input.module.scss';
import mainCls from '../form.module.scss';

interface InputProps extends FormI {
    readonly onChange?: (value: string) => void;
    readonly type?: HTMLInputTypeAttribute;
    readonly placeholder?: string;
}

export const Input: FC<InputProps> = props => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        placeholder,
        Icon,
    } = props;
    const id = useId();
    // const [isFocus, setIsFocus] = useState(false);

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = e => {
        onChange?.(e.target.value);
    };

    return (
        <div className={clsx(mainCls.container, className)}>
            {label && (
                <label
                    className={clsx(mainCls.label)}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <div className={clsx(cls.inputWrapper, mainCls.form)}>
                {Icon && <Icon className={cls.icon} />}
                <input
                    className={cls.input}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeHandler}
                    // onFocus={() => setIsFocus(true)}
                    // onBlur={() => setIsFocus(false)}
                />
            </div>
        </div>
    );
};
