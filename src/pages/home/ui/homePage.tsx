import { FC } from 'react';
import { Promo } from 'widgets/promo';
import { ServicesRange } from 'features/servicesRange';
import {
    CarouselObjectProperties,
    CarouselObjectTestimonials,
    CarouselObjectFAQ,
} from 'widgets/carouselObject';
import cls from './homePage.module.scss';

export const HomePage: FC = () => {
    return (
        <div className={cls.homePage}>
            <Promo />
            <ServicesRange />
            <CarouselObjectProperties />
            <CarouselObjectTestimonials />
            <CarouselObjectFAQ />
        </div>
    );
};
