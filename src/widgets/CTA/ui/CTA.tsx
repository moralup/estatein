import type { FC } from 'react';

import { Button } from 'shared/ui/button';
import { HStack, VStack } from 'shared/ui/stack';

import AbstractDesignTiles from 'shared/assets/images/abstract-design-tiles.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './CTA.module.scss';

interface CTAProps {
    className?: string;
}

export const CTA: FC<CTAProps> = ({ className }) => {
    return (
        <div
            className={clsx(cls.CTA, className)}
        >
            <VStack className={cls.textContent}>
                <h2 className={cls.title}>
                    Start Your Real Estate Journey Today
                </h2>
                <p>
                    Your dream property is just a click away. Whether you're
                    looking for a new home, a strategic investment, or expert
                    real estate advice, Estatein is here to assist you every
                    step of the way. Take the first step towards your real
                    estate goals and explore our available properties or get in
                    touch with our team for personalized assistance.
                </p>
            </VStack>
            <Button theme="background">Explore Properties</Button>
            <AbstractDesignTiles className={clsx(cls.design, cls.designLeft)} />
            <AbstractDesignTiles
                // viewBox="48 -32 367 200"
                className={clsx(cls.design, cls.designRight)}
            />
        </div>
    );
};

/* <AbstractDesignTiles
width="566"
height="308"
viewBox="48 -32 367 200"
className={clsx(cls.design, cls.designRight)}
/> */
