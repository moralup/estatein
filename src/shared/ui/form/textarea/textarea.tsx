import { type ChangeEventHandler, type FC, useCallback, useId } from 'react';
import type { FormI } from '../types';
import { clsx } from 'shared/lib/clsx';
import cls from './textarea.module.scss';
import mainCls from '../form.module.scss';

export interface TextareaProps extends TypedOmit<FormI, 'Icon'> {
    /** Placeholder of textarea */
    readonly placeholder?: string;
    /** Event Handler called when a text is written */
    readonly onChange?: (value: string) => void;
}

export const Textarea: FC<TextareaProps> = props => {
    const { className, label, onChange, value, placeholder } = props;
    const id = useId();

    type HandlerType = ChangeEventHandler<HTMLTextAreaElement>;

    const onChangeHandler: HandlerType = useCallback(
        e => onChange?.(e.target.value),
        [onChange],
    );

    return (
        <div className={clsx(mainCls.container, className)}>
            <label
                htmlFor={id}
                className={mainCls.label}
            >
                {label}
            </label>
            <textarea
                className={clsx(cls.textarea, mainCls.form)}
                id={id}
                onChange={onChangeHandler}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
};
