import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './servicesPage.module.scss';

interface ServicesPageProps {
    className?: string;
}

export const ServicesPage: FC<ServicesPageProps> = ({ className }) => {
    return (
        <div className={clsx(cls.servicesPage, className)}>
            servicesPage
        </div>
    );
};
