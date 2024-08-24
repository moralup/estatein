import type { FC, ButtonHTMLAttributes } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './button.module.scss';

type ButtonThemeType =
    | 'outline'
    | 'background'
    | 'grayBackground'
    | 'darkGrayBackground'
    | 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonThemeType;
    max?: boolean;
    circle?: boolean;
}

export const Button: FC<ButtonProps> = props => {
    const {
        children,
        className,
        theme = 'outline',
        max,
        circle,
        disabled,
        ...otherProps
    } = props;

    const classes = clsx(
        className,
        cls.button,
        cls[theme],
        max && cls.max,
        circle && cls.circle,
        disabled && cls.disabled,
    );

    return (
        <button
            type="button"
            className={classes}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
