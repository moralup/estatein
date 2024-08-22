import { FC } from 'react';

import { Button } from 'shared/ui/button';
import { HStack, VStack } from 'shared/ui/stack';
import { StatsTabs } from '../stats/statsTabs';

import { clsx } from 'shared/lib/clsx';
import cls from './promo.module.scss';
import { PromoImage } from '../promoImage/promoImage';

export const Promo: FC = () => {
    return (
        <HStack
            gap="4vw"
            justify="between"
            align="left"
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
            <PromoImage />
        </HStack>
    );
};
