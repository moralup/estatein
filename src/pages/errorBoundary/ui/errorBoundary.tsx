import { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import { clsx } from 'shared/lib/clsx';
import cls from './errorBoundary.module.scss';

interface ErrorBoundaryProps {
    className?: string;
}

export const ErrorBoundary: FC<ErrorBoundaryProps> = ({ className }) => {
    const error = useRouteError();

    console.log('MY CUSTOM CONSOLE ERROR', error);

    return (
        <div className={clsx(cls.errorBoundary, className)}>errorBoundary</div>
    );
};
