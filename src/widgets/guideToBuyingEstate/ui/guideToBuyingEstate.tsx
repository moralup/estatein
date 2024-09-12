import type { FC } from 'react';

import { guideToBuyingEstateData } from '../model/consts';
import { numberFormatter } from 'shared/lib/numberFormatter';

import { InfoBlock } from 'shared/ui/containerWithStars';
import { StepGuide } from 'entities/stepGuide';
import { HStack } from 'shared/ui/stack';

import cls from './guideToBuyingEstate.module.scss';

export const GuideToBuyingEstate: FC = () => {
    return (
        <InfoBlock
            className={cls.test}
            description={`At Estatein, we've designed a straightforward process 
            to help you find and purchase your dream property with ease. Here's 
            a step-by-step guide to how it all works.`}
            title="Navigating the Estatein Experience"
        >
            <HStack className={cls.steps}>
                {guideToBuyingEstateData.map((step, i) => (
                    <StepGuide
                        key={step.title}
                        step={numberFormatter(i + 1)}
                        {...step}
                    />
                ))}
            </HStack>
        </InfoBlock>
    );
};
