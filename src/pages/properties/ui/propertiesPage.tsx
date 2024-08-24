/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './propertiesPage.module.scss';

interface PropertiesPageProps {
    className?: string;
}

export const PropertiesPage = <T extends 'properties', >({ className }: PropertiesPageProps) => {
    return (
        <div className={clsx(cls.propertiesPage, className)}>
            propertiesPage
        </div>
    );
};
