import type { FC } from 'react';
import { CarouselObjectValuedClients } from 'widgets/carouselObject';
import { GuideToBuyingEstate } from 'widgets/guideToBuyingEstate';
import { OurAchievements } from 'widgets/ourAchievements';
import { OurJourney } from 'widgets/ourJourney';
import { OurValues } from 'widgets/ourValues';
import { ShowTeam } from 'widgets/showTeam';
import cls from './aboutPage.module.scss';

export const AboutPage: FC = () => {
    return (
        <div className={cls.pageContent}>
            <OurJourney />
            <OurValues />
            <OurAchievements />
            <GuideToBuyingEstate />
            <ShowTeam />
            <CarouselObjectValuedClients />
        </div>
    );
};
