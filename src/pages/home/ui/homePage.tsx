import { FC } from 'react';
import { Promo } from 'widgets/promo';
import { ServicesRange } from 'features/servicesRange';
import {
    CarouselObjectProperties,
    CarouselObjectTestimonials,
    CarouselObjectFAQ,
} from 'widgets/carouselObject';
import cls from './homePage.module.scss';
import { clsx } from 'shared/lib/clsx';

export const HomePage: FC = () => {
    return (
        <>
            <Promo />
            <ServicesRange />
            <div className={clsx(cls.pageContent)}>
                <CarouselObjectProperties />
                <CarouselObjectTestimonials />
                <CarouselObjectFAQ />
            </div>
        </>
    );
};
