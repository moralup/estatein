import { FC } from 'react';

import type { EstateI } from '../../model/types/estate';
import { priceFormatter } from 'shared/lib/priceFormatter';

import { Tags } from '../tags/tags';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';

import { clsx } from 'shared/lib/clsx';
import cls from './estateCard.module.scss';

interface EstateCardProps {
    className?: string;
    estate: EstateI;
}
// prettier-ignore
export const EstateCard: FC<EstateCardProps> = ({ className, estate }) => {
    const { description, img, title, price, tags } = estate;

    return (
        <VStack
            gap={30}
            className={clsx(cls.estateCard, className)}
        >
            <img className={cls.img} src={img} alt={title} />
            <VStack gap={6}>
                <h4 className={cls.title}>{title}</h4>
                <p>{description}</p>
            </VStack>
            <Tags tags={tags} />
            <HStack gap={50}>
                <VStack align="left" gap={2}>
                    <span>Price</span>
                    <span className={cls.price}>{priceFormatter(price)}</span>
                </VStack>
                <Button max theme="background">
                    View Property Details
                </Button>
            </HStack>
        </VStack>
    );
};
