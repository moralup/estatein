/* eslint-disable max-len */
import { CommentCard } from 'entities/comment';
import { CarouselTemplate } from '../../.template/carouselObjectTemplate';
import { comments } from '../model/consts';

export const CarouselObjectTestimonials = () => {
    return (
        <CarouselTemplate
            Card={CommentCard}
            cardsProps={comments}
            description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            title="What Our Clients Say"
            type="Testimonials"
        />
    );
};
