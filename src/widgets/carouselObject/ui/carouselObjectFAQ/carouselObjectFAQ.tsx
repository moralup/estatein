import { FAQCard, FAQProps } from 'entities/FAQ';
import { CarouselObjectTemplate } from '../.template/carouselObjectTemplate';

const questionsAnswers: FAQProps[] = [
    {
        question: 'How do I search for properties on Estatein?',
        answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
        linkReadMore: '',
    },
    {
        question:
            'What documents do I need to sell my property through Estatein?',
        answer: 'Find out about the necessary documentation for listing your property with us.',
        linkReadMore: '',
    },
    {
        question: 'How can I contact an Estatein agent?',
        answer: 'Discover the different ways you can get in touch with our experienced agents.',
        linkReadMore: '',
    },
];

export const CarouselObjectFAQ = () => {
    return (
        <CarouselObjectTemplate
            type="FAQ's"
            title="Frequently Asked Questions"
            // eslint-disable-next-line max-len
            description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every
step of the way."
            ComponentCard={FAQCard}
            arrProps={questionsAnswers}
        />
    );
};
