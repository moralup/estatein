import type { FC } from 'react';
import type { CommentI } from '../../model/types';

import { RatingStar } from 'shared/ui/ratingStar/ratingStar';
import { User } from '../user/user';
import { VStack } from 'shared/ui/stack';

import { clsx } from 'shared/lib/clsx';
import cls from './commentCard.module.scss';

export interface CommentCardProps {
    className?: string;
    comment: CommentI;
}

export const CommentCard: FC<CommentCardProps> = ({ className, comment }) => {
    const { feedback, rating, feedbackTitle, user } = comment;

    return (
        <VStack
            gap={40}
            className={clsx(cls.commentCard, className)}
        >
            <RatingStar rating={rating} />
            <VStack gap={14}>
                <h2 className={cls.feedbackTitle}>{feedbackTitle}</h2>
                <p className={cls.feedback}>{feedback}</p>
            </VStack>
            <User user={user} className={cls.user} />
        </VStack>
    );
};
