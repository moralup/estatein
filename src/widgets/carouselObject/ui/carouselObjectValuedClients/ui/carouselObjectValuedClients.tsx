/* eslint-disable max-len */
import { valuedClients } from '../model/consts';

import { CarouselTemplate } from '../../template/carouselObjectTemplate';
import { DealCard } from 'entities/deal';
import { useResponsiveSettings } from 'shared/lib/hooks/useResponsiveSettings';
import {
    responsiveManagerCardSize,
    responsiveManagerGapBetweenCards,
    responsiveManagerNumberOfCards,
    responsiveManagerTextWidthOfInfoBlock,
} from 'shared/consts/responsiveManagers';

export const CarouselObjectValuedClients = () => {
    const gap = useResponsiveSettings(responsiveManagerGapBetweenCards);
    const size = useResponsiveSettings(responsiveManagerCardSize);
    const textWidth = useResponsiveSettings(
        responsiveManagerTextWidthOfInfoBlock,
    );

    return (
        <CarouselTemplate
            title="Our Valued Clients"
            // description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving.  of serving of serving of serving of serving"
            description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving."
            navigationView="fullWidth"
            responsiveManager={responsiveManagerNumberOfCards}
            cardProps={{ size }}
            gap={gap}
            Card={DealCard}
            dataset={valuedClients}
            textWidth={textWidth}
        />
    );
};
