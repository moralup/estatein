import { FC } from 'react';
import { VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import cls from './FAQCard.module.scss';

export interface FAQProps {
    question: string;
    answer: string;
    linkReadMore: string;
}

export const FAQCard: FC<FAQProps> = ({ answer, linkReadMore, question }) => {
    return (
        <VStack className={cls.faq} gap={30}>
            <h3 className={cls.question}>{question}</h3>
            <p>{answer}</p>
            <Button
                style={{ marginRight: 'auto' }}
                theme="grayBackground"
                onClick={() => console.log(linkReadMore)}
            >
                Read More
            </Button>
        </VStack>
    );
};

// How do I search for properties on Estatein? Learn how to use our user-friendly search tools to find properties that match your criteria.
