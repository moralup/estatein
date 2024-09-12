/* eslint-disable max-len */
import { FAQCard } from 'entities/FAQ';
import { CarouselTemplate } from '../../.template/carouselObjectTemplate';
import { questionsAnswers } from '../model/consts';

export const CarouselObjectFAQ = () => {
    return (
        <CarouselTemplate
            type="FAQ's"
            title="Frequently Asked Questions"
            description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            Card={FAQCard}
            cardsProps={questionsAnswers}
        />
    );
};
