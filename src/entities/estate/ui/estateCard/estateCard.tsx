import type { FC } from 'react';
import type { EstateI } from '../../model/types/estate';
import { priceFormatter } from 'shared/lib/priceFormatter';

import { Card } from 'shared/ui/card';
import { Tag, TagList } from '../tags/tags';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';

import { clsx } from 'shared/lib/clsx';
import cls from './estateCard.module.scss';

type ViewType = 'homePage' | 'propertiesPage';

export interface EstateCardProps {
    className?: string;
    estate: EstateI;
    view?: ViewType;
}
// prettier-ignore
export const EstateCard: FC<EstateCardProps> = ({ className, estate, view }) => {
    const { description, img, title, price, tags, ambiance } = estate;

    return (
        <Card className={clsx(cls.card, className)} padding="m">
            <img className={cls.estateImage} src={img} alt={title} />
            <VStack className={cls.estateDetails}>
                {view === 'propertiesPage' && <Tag value={ambiance} />}
                <VStack className={cls.estateSummary}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </VStack>
                {view === 'homePage' && <TagList tags={tags} />}
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
