import type { FC } from 'react';
import type { EstateI } from '../../model/types/estate';
import { priceFormatter } from 'shared/lib/priceFormatter';

import { BaseCardProps, Card } from 'shared/ui/containers';
import { Tag, TagList } from '../tags/tags';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';

import { clsx } from 'shared/lib/clsx';
import cls from './estateCard.module.scss';

export interface EstateCardView {
    isAmbianceTag?: boolean;
    isSpecificationsTags?: boolean;
}

export type EstateCardProps = EstateCardView & BaseCardProps<EstateI>;
// prettier-ignore
export const EstateCard: FC<EstateCardProps> = props => {
    const {
        isSpecificationsTags,
        isAmbianceTag,
        data,
        className,
        size,
    } = props;
    const { description, img, title, price, tags, ambiance } = data;

    return (
        <Card className={clsx(cls.card, size && cls[`size_${size}`], className)}>
            <img className={cls.estateImage} src={img} alt={title} />
            <VStack className={cls.estateDetails}>
                {isAmbianceTag && <Tag value={ambiance} />}
                <VStack className={cls.estateSummary}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </VStack>
                {isSpecificationsTags && <TagList tags={tags} />}
                <HStack className={cls.footer}>
                    <VStack>
                        <span className={cls.priceLabel}>Price</span>
                        <h3 className={cls.price}>{priceFormatter(price)}</h3>
                    </VStack>
                    <Button max theme="background">
                        View Property Details
                    </Button>
                </HStack>
            </VStack>
        </Card>
    );
};
