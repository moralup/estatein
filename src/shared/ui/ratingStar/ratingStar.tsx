import type { FC } from 'react';
import StarIcon from '../../assets/icons/star-icon.svg';
import { HStack } from '../stack';
import { clsx } from '../../lib/clsx';
import cls from './ratingStar.module.scss';

interface RatingStarProps {
    className?: string;
    rating?: number;
}

const stars = [1, 2, 3, 4, 5];

export const RatingStar: FC<RatingStarProps> = ({ className, rating = 0 }) => {
    return (
        <HStack
            gap={10}
            className={className}
        >
            {stars.map(star => (
                <HStack
                    justify="center"
                    key={star}
                    className={clsx(cls.star, star <= rating && cls.active)}
                >
                    <StarIcon />
                </HStack>
            ))}
        </HStack>
    );
};
