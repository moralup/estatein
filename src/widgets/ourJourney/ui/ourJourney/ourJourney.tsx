import type { FC } from 'react';
import type { BreakpointType } from 'shared/types/breakpoints';
import { stats } from 'shared/consts/server';

import { InfoBlock } from 'shared/ui/containers';
import { VStack } from 'shared/ui/stack';
import { StatsTabs } from 'entities/stats';
import houseOnPalm from 'shared/assets/images/house-on-palm.png';

import cls from './ourJourney.module.scss';

const BREAKPOINT_START: BreakpointType = 768;
const BREAKPOINT_END: BreakpointType = 1200;

// prettier-ignore
const isInsideInfoBlock = window.innerWidth < BREAKPOINT_START || window.innerWidth > BREAKPOINT_END;
const isOutsideInfoBlock = !isInsideInfoBlock;

export const OurJourney: FC = () => {
    const statsTabs = (
        <StatsTabs
            stats={stats}
            size="max"
        />
    );

    return (
        <VStack className={cls.sectionWrapper}>
            <div className={cls.section}>
                <InfoBlock
                    className={cls.infoBlock}
                    title="Our Journey"
                    description={`Our story is one of continuous growth and evolution. We
                    started as a small team with big dreams, determined to create a
                    real estate platform that transcended the ordinary. Over the years,
                    we've expanded our reach, forged valuable partnerships, and gained 
                    the trust of countless clients.`}
                >
                    {isInsideInfoBlock && statsTabs}
                </InfoBlock>
                <div className={cls.imgWrap}>
                    <img
                        src={houseOnPalm}
                        alt="houseOnPalm"
                        className={cls.img}
                    />
                </div>
            </div>
            {isOutsideInfoBlock && statsTabs}
        </VStack>
    );
};
