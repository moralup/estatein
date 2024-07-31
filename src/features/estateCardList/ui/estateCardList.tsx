import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './estateCardList.module.scss';
import { EstateCard, EstateI } from 'entities/estate';
import { HStack } from 'shared/ui/stack';

interface EstateCardListProps {
    className?: string;
}

const estates: EstateI[] = [
    {
        title: 'Seaside Serenity Villa',
        description: `A stunning 4-bedroom, 3-bathroom villa in a peaceful 
        suburban neighborhood... Read More`,
        price: 550000,
        img: 'https://estateindubai.com/uploads/QXHmRFZbsa.webp',
        tags: [
            { value: 'Bedroom', quantity: 4 },
            { value: 'Bathroom', quantity: 3 },
            { value: 'Villa' },
        ],
    },
    {
        title: 'Metropolitan Haven',
        description: `A chic and fully-furnished 2-bedroom apartment with panoramic
        city views... Read More`,
        price: 550000,
        img: 'https://estateindubai.com/uploads/NtzrbcGopP.webp',
        tags: [
            { value: 'Bedroom', quantity: 2 },
            { value: 'Bathroom', quantity: 2 },
            { value: 'Villa' },
        ],
    },
    {
        title: 'Rustic Retreat Cottage',
        description: `An elegant 3-bedroom, 2.5-bathroom townhouse in a gated 
        community... Read More`,
        price: 550000,
        img: 'https://estateindubai.com/uploads/iWRKdBjEZe.webp',
        tags: [
            { value: 'Bedroom', quantity: 3 },
            { value: 'Bathroom', quantity: 3 },
            { value: 'Villa' },
        ],
    },
];

export const EstateCardList: FC<EstateCardListProps> = ({ className }) => {
    return (
        <HStack
            gap={30}
            className={clsx(cls.estateCardList, className)}
        >
            {estates.map((estate, i) => (
                <EstateCard
                    key={i}
                    estate={estate}
                />
            ))}
        </HStack>
    );
};
