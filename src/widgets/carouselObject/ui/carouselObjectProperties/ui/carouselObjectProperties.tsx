/* eslint-disable max-len */
import type { FC } from 'react';
import {
    type CarouselTemplateProps,
    CarouselTemplate,
} from '../../template/carouselObjectTemplate';
import { EstateCard } from 'entities/estate';
import { EstateCardView } from 'entities/estate/ui/estateCard/estateCard';

import { realProperties } from '../model/consts';
import { useResponsiveSettings } from 'shared/lib/hooks/useResponsiveSettings';
import {
    responsiveManagerCardSize,
    responsiveManagerGapBetweenCards,
    responsiveManagerNumberOfCards,
    responsiveManagerTextWidthOfInfoBlock,
} from 'shared/consts/responsiveManagers';

type ViewType = 'homePage' | 'propertiesPage';

interface COPProps {
    view: ViewType;
    className?: string;
}

// prettier-ignore
export const contentMap = {
    homePage: {
        title: 'Featured Properties',
        description: 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein',
        navigationView: 'right',
        type: 'Properties',
        isAmbianceTag: false,
        isSpecificationsTags: true,
    },
    propertiesPage: {
        title: 'Discover a World of Possibilities',
        description: 'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home',
        navigationView: 'fullWidth',
        type: undefined,
        isAmbianceTag: true,
        isSpecificationsTags: false,
    },
} satisfies Record<ViewType, Partial<CarouselTemplateProps<any> & EstateCardView>>;

export const CarouselObjectProperties: FC<COPProps> = ({ view, className }) => {
    const {
        description,
        isAmbianceTag,
        isSpecificationsTags,
        navigationView,
        title,
        type,
    } = contentMap[view];

    const gap = useResponsiveSettings(responsiveManagerGapBetweenCards);
    const size = useResponsiveSettings(responsiveManagerCardSize);
    const textWidth = useResponsiveSettings(
        responsiveManagerTextWidthOfInfoBlock,
    );

    return (
        <CarouselTemplate
            className={className}
            Card={EstateCard}
            dataset={realProperties}
            cardProps={{ isAmbianceTag, isSpecificationsTags, size }}
            description={description}
            title={title}
            type={type}
            navigationView={navigationView}
            responsiveManager={responsiveManagerNumberOfCards}
            gap={gap}
            textWidth={textWidth}
        />
    );
};
