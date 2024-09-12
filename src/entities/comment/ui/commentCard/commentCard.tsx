import type { FC } from 'react';
import type { CommentI } from '../../model/types';

import { RatingStar } from 'shared/ui/ratingStar/ratingStar';
import { User } from '../user/user';
import { VStack } from 'shared/ui/stack';

import { clsx } from 'shared/lib/clsx';
import cls from './commentCard.module.scss';
import { Card } from 'shared/ui/card';

export interface CommentCardProps {
    className?: string;
    comment: CommentI;
}

export const CommentCard: FC<CommentCardProps> = ({ className, comment }) => {
    const { feedback, rating, feedbackTitle, user } = comment;

    return (
        <Card
            className={clsx(cls.commentCard, className)}
            align="left"
            padding="l"
        >
            <RatingStar
                rating={rating}
                className={cls.stars}
            />
            <VStack className={cls.feedbackContainer}>
                <span className={cls.feedbackTitle}>{feedbackTitle}</span>
                <p className={cls.feedback}>{feedback}</p>
            </VStack>
            <User
                user={user}
                className={cls.user}
            />
        </Card>
    );
};
