import type { FC } from 'react';
import type { QuestionAnswerI } from '../model/types';

import { Button } from 'shared/ui/button';
import { BaseCardProps, Card } from 'shared/ui/containers';

import { clsx } from 'shared/lib/clsx';
import cls from './FAQCard.module.scss';

export type FAQProps = BaseCardProps<QuestionAnswerI>;

export const FAQCard: FC<FAQProps> = props => {
    const { data, size, className } = props;
    const { answer, linkReadMore, question } = data;

    return (
        <Card className={clsx(cls.card, size && cls[`size_${size}`], className)}>
            <span className={cls.question}>{question}</span>
            <p className={cls.answer}>{answer}</p>
            {linkReadMore && (
                <Button
                    className={cls.btnReadMore}
                    theme="grayBackground"
                    onClick={() => console.log(linkReadMore)}
                >
                    Read More
                </Button>
            )}
        </Card>
    );
};
