import { FC } from 'react';
import cls from './homePage.module.scss';
import { clsx } from 'shared/lib/clsx';
import { Promo } from 'widgets/overview';
import { EstateCardList } from 'features/estateCardList/ui/estateCardList';
import { CTA } from 'widgets/CTA';
import { ServicesRange } from 'features/servicesRange';

interface HomePageProps {
    className?: string;
}

export const HomePage: FC<HomePageProps> = ({ className }) => {
    return (
        <div className={clsx(cls.homePage, className)}>
            <Promo />
            <ServicesRange />
            <EstateCardList />
            <CTA />
        </div>
    );
};
