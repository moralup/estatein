import type { FC } from 'react';
import type { CommentI } from '../../model/types';

import { RatingStar } from 'shared/ui/ratingStar/ratingStar';
import { User } from '../user/user';
import { VStack } from 'shared/ui/stack';

import { clsx } from 'shared/lib/clsx';
import cls from './commentCard.module.scss';
import { BaseCardProps, Card } from 'shared/ui/containers';

export type CommentCardProps = BaseCardProps<CommentI>;

export const CommentCard: FC<CommentCardProps> = props => {
    const { className, size, view = 'vertical', data } = props;
    const { feedback, rating, feedbackTitle, user } = data;

    const cardClasses = clsx(
        cls.commentCard,
        cls[`size_${size}`],
        cls[`view_${view}`],
        className,
    );

    return (
        <Card
            className={cardClasses}
            align="left"
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
