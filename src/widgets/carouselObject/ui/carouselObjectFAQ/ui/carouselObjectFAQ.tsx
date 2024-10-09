/* eslint-disable max-len */
import { FAQCard } from 'entities/FAQ';
import { CarouselTemplate } from '../../template/carouselObjectTemplate';
import { questionsAnswers } from '../model/consts';
import { useResponsiveSettings } from 'shared/lib/hooks/useResponsiveSettings';
import {
    responsiveManagerCardSize,
    responsiveManagerGapBetweenCards,
    responsiveManagerNumberOfCards,
    responsiveManagerTextWidthOfInfoBlock,
} from 'shared/consts/responsiveManagers';

export const CarouselObjectFAQ = () => {
    const gap = useResponsiveSettings(responsiveManagerGapBetweenCards);
    const size = useResponsiveSettings(responsiveManagerCardSize);
    const textWidth = useResponsiveSettings(responsiveManagerTextWidthOfInfoBlock);

    return (
        <CarouselTemplate
            type="FAQ's"
            title="Frequently Asked Questions"
            description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            Card={FAQCard}
            dataset={questionsAnswers}
            cardProps={{ size }}
            responsiveManager={responsiveManagerNumberOfCards}
            gap={gap}
            textWidth={textWidth}
        />
    );
};
