import { FC } from 'react';
import { CarouselObjectValuedClients } from 'widgets/carouselObject';
import { GuideToBuyingEstate } from 'widgets/guideToBuyingEstate';
import { OurAchievements } from 'widgets/ourAchievements';
import { OurJourney } from 'widgets/ourJourney';
import { OurValues } from 'widgets/ourValues';
import { ShowTeam } from 'widgets/showTeam';
// import { ValuedClients } from 'widgets/valuedClients';

export const AboutPage: FC = () => {
    return (
        <>
            {/* <OurJourney />
            <OurValues />
            <OurAchievements />
            <GuideToBuyingEstate />
            <ShowTeam /> */}
            {/* <ValuedClients /> */}
            <CarouselObjectValuedClients />
        </>
    );
};
