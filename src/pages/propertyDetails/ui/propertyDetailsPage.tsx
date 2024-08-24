import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './propertyDetailsPage.module.scss';

interface PropertyDetailsPageProps {
    className?: string;
}

export const PropertyDetailsPage: FC<PropertyDetailsPageProps> = ({ className }) => {
    return (
        <div className={clsx(cls.propertyDetailsPage, className)}>
            propertyDetailsPage
        </div>
    );
};
