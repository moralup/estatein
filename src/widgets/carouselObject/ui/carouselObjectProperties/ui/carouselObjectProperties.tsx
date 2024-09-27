/* eslint-disable max-len */
import { EstateCard } from 'entities/estate';
import {
    CarouselTemplate,
    CarouselTemplateProps,
} from '../../.template/carouselObjectTemplate';
import { realProperties } from '../model/consts';
import { FC } from 'react';

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
    },
    propertiesPage: {
        title: 'Discover a World of Possibilities',
        description: 'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home',
        navigationView: 'fullWidth',
        type: undefined,
    },
} satisfies Record<ViewType, Partial<CarouselTemplateProps<any>>>;

export const CarouselObjectProperties: FC<COPProps> = ({ view, className }) => {
    return (
        <CarouselTemplate
            className={className}
            Card={EstateCard}
            cardsProps={realProperties}
            commonProps={{ view }}
            description={contentMap[view].description}
            title={contentMap[view].title}
            type={contentMap[view].type}
            navigationView={contentMap[view].navigationView}
        />
    );
};
