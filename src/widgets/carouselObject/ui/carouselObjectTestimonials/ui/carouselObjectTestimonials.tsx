/* eslint-disable max-len */
import { CommentCard } from 'entities/comment';
import { CarouselTemplate } from '../../template/carouselObjectTemplate';
import { comments } from '../model/consts';
import { useResponsiveSettings } from 'shared/lib/hooks/useResponsiveSettings';
import {
    responsiveManagerCardSize,
    responsiveManagerGapBetweenCards,
    responsiveManagerNumberOfCards,
    responsiveManagerTextWidthOfInfoBlock,
} from 'shared/consts/responsiveManagers';

export const CarouselObjectTestimonials = () => {
    const gap = useResponsiveSettings(responsiveManagerGapBetweenCards);
    const size = useResponsiveSettings(responsiveManagerCardSize);
    const textWidth = useResponsiveSettings(responsiveManagerTextWidthOfInfoBlock);

    return (
        <CarouselTemplate
            type="Testimonials"
            title="What Our Clients Say"
            description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            Card={CommentCard}
            dataset={comments}
            cardProps={{ size }}
            responsiveManager={responsiveManagerNumberOfCards}
            gap={gap}
            textWidth={textWidth}
        />
    );
};
