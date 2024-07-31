/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react';

import { Button } from 'shared/ui/button';
import { StatsTabs } from 'entities/statsTabs';
import { HStack, VStack } from 'shared/ui/stack';

import { clsx } from 'shared/lib/clsx';
import cls from './promo.module.scss';

import houseImage from 'shared/assets/images/house.png';

interface PromoProps {
    className?: string;
}

export const Promo: FC<PromoProps> = ({ className }) => {
    return (
        <HStack
            gap="4vw"
            justify="between"
            className={className}
        >
            <VStack
                gap={60}
                className={clsx(cls.content)}
            >
                <VStack gap={24}>
                    <h2 className={cls.title}>
                        Discover Your Dream Property with Estatein
                    </h2>
                    <p>
                        Your journey to finding the perfect property begins
                        here. Explore our listings to find the home that matches
                        your dreams
                    </p>
                </VStack>
                <HStack gap={20}>
                    <Button>Learn More</Button>
                    <Button theme="background">Browse Properties</Button>
                </HStack>
                <StatsTabs />
            </VStack>
            <img src={houseImage} />
        </HStack>
    );
};
