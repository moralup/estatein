/* eslint-disable max-len */
import { EstateCard } from 'entities/estate';
import { CarouselTemplate } from '../../.template/carouselObjectTemplate';
import { realProperties } from '../model/consts';

export const CarouselObjectProperties = () => {
    return (
        <CarouselTemplate
            Card={EstateCard}
            cardsProps={realProperties}
            description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein"
            title="Featured Properties"
            type="Properties"
        />
    );
};
