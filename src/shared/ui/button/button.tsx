import { FC, ButtonHTMLAttributes } from 'react';
import cls from './button.module.scss';
import { clsx } from 'shared/lib/clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: 'outline' | 'background' | 'grayBackground';
    max?: boolean;
}

export const Button: FC<ButtonProps> = props => {
    const {
        children,
        className,
        theme = 'outline',
        max,
        ...otherProps
    } = props;

    const classes = clsx(cls.button, cls[theme], max && cls.max, className);
    // const classes = 'clsx(cls.button, cls[theme], max && cls.max, className)';

    return (
        <button
            type="button"
            className={classes}
            {...otherProps}
        >
            {children}
        </button>
    );
};
