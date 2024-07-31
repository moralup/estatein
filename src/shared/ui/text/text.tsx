import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './text.module.scss';

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
}

export const Text: FC<TextProps> = props => {
    const { className, description, title } = props;

    return (
        <>
            <div className={clsx(cls.title, className)}>{title}</div>
            <div className={clsx(cls.description)}>{description}</div>
        </>
    );
};
