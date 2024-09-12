import { FC } from 'react';
import { stats } from 'shared/consts/server';

import { StatsTabs } from 'entities/stats';
import { Button } from 'shared/ui/button';
import { VStack } from 'shared/ui/stack';
import AbstractDesignCurves from 'shared/assets/images/abstract-design-promo.svg';
import houseImage from 'shared/assets/images/house.png';

import { clsx } from 'shared/lib/clsx';
import cls from './promo.module.scss';

export const Promo: FC = () => {
    return (
        <div className={cls.promo}>
            <div className={cls.infoBlockWrapper}>
                <VStack className={clsx(cls.infoBlock)}>
                    <VStack>
                        <h1 className={cls.title}>
                            Discover Your Dream Property with Estatein
                        </h1>
                        <p>
                            Your journey to finding the perfect property begins
                            here. Explore our listings to find the home that
                            matches your dreams
                        </p>
                    </VStack>
                    <div className={cls.buttonsWrapper}>
                        <Button>Learn More</Button>
                        <Button theme="background">Browse Properties</Button>
                    </div>
                    <StatsTabs stats={stats} />
                </VStack>
            </div>
            <div className={cls.imgWrap}>
                <AbstractDesignCurves className={cls.backImg} />
                <img
                    className={cls.img}
                    src={houseImage}
                    alt="real property"
                />
            </div>
        </div>
    );
};
