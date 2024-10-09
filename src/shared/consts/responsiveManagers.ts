import { ResponsiveManagerQuantityType } from 'entities/carousel';
import type {
    ResponsiveManagerSizeType,
    ResponsiveManagerGapType,
    ResponsiveManagerTextWidthType,
} from '../types/responsiveManagers';

export const responsiveManagerNumberOfCards: ResponsiveManagerQuantityType = {
    0: { items: 1 },
    768: { items: 2 },
    1200: { items: 3 },
};

export const responsiveManagerCardSize: ResponsiveManagerSizeType = {
    0: 's',
    992: 'm',
    1700: 'l',
};

export const responsiveManagerGapBetweenCards: ResponsiveManagerGapType = {
    0: 15,
    768: 20,
    1700: 30,
};

export const responsiveManagerTextWidthOfInfoBlock: ResponsiveManagerTextWidthType = {
    0: '100%',
    992: '80%',
    1700: '85%',
};
