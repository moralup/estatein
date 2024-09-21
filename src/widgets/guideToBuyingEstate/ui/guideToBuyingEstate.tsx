import type { FC } from 'react';

import { guideToBuyingEstateData } from '../model/consts';
import { numberFormatter } from 'shared/lib/numberFormatter';

import { InfoBlock } from 'shared/ui/containerWithStars';
import { StepGuide } from 'entities/stepGuide';

import cls from './guideToBuyingEstate.module.scss';

export const GuideToBuyingEstate: FC = () => {
    return (
        <InfoBlock
            textContainerClassName={cls.text}
            className={cls.test}
            description={`At Estatein, we've designed a straightforward process 
            to help you find and purchase your dream property with ease. Here's 
            a step-by-step guide to how it all works.`}
            title="Navigating the Estatein Experience"
        >
            <div className={cls.stepList}>
                {guideToBuyingEstateData.map((step, i) => (
                    <StepGuide
                        key={step.title}
                        step={numberFormatter(i + 1)}
                        {...step}
                        className={cls.stepCard}
                    />
                ))}
            </div>
        </InfoBlock>
    );
};
