import type { FC } from 'react';
import { PropertyFilters } from 'features/propertyFilters';
import { clsx } from 'shared/lib/clsx';
import cls from './promoProperties.module.scss';

interface PromoPropertiesProps {
    className?: string;
}

export const PromoProperties: FC<PromoPropertiesProps> = ({ className }) => {
    return (
        <div className={clsx(cls.promoProperties, className)}>
            <div className={cls.infoBlock}>
                <h2>Find Your Dream Property</h2>
                <p className={cls.infoBlock__text}>
                    Welcome to Estatein, where your dream property awaits in
                    every corner of our beautiful world. Explore our curated
                    selection of properties, each offering a unique story and a
                    chance to redefine your life. With categories to suit every
                    dreamer, your journey
                </p>
            </div>
            <PropertyFilters className={cls.filters} />
        </div>
    );
};
