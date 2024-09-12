import { FC } from 'react';
import { stats } from 'shared/consts/server';

import { InfoBlock } from 'shared/ui/containerWithStars';
import { HStack } from 'shared/ui/stack';
import { StatsTabs } from 'entities/stats';
import houseOnPalm from 'shared/assets/images/house-on-palm.png';

import { clsx } from 'shared/lib/clsx';
import cls from './ourJourney.module.scss';

export const OurJourney: FC = () => {
    return (
        <HStack
            // gap="4vw"
            gap={80}
            justify="between"
            className={clsx(cls.wrap)}
        >
            <InfoBlock
                title="Our Journey"
                description={` Our story is one of continuous growth and evolution. We
                    started as a small team with big dreams, determined to create a
                    real estate platform that transcended the ordinary. Over the years,
                    we've expanded our reach, forged valuable partnerships, and gained 
                    the trust of countless clients.`}
            >
                <StatsTabs
                    stats={stats}
                    size="max"
                />
            </InfoBlock>
            <img
                src={houseOnPalm}
                alt="houseOnPalm"
                className={cls.img}
            />
        </HStack>
    );
};
