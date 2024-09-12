import { FC } from 'react';
import { Button } from 'shared/ui/button';
import cls from './FAQCard.module.scss';
import { Card } from 'shared/ui/card';
import { clsx } from 'shared/lib/clsx';

export interface FAQProps {
    question: string;
    answer: string;
    linkReadMore: string;
    className?: string;
}

export const FAQCard: FC<FAQProps> = props => {
    const { answer, linkReadMore, question, className } = props;

    return (
        <Card
            className={clsx(cls.card, className)}
            padding="l"
        >
            <span className={cls.question}>{question}</span>
            <p className={cls.answer}>{answer}</p>
            <Button
                className={cls.btnReadMore}
                theme="grayBackground"
                onClick={() => console.log(linkReadMore)}
            >
                Read More
            </Button>
        </Card>
    );
};
