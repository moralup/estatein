import type { FC } from 'react';
import { companyValues } from '../model/consts';
import { InfoBlock } from 'shared/ui/containerWithStars';
import { HStack, VStack } from 'shared/ui/stack';
import cls from './ourValues.module.scss';

export const OurValues: FC = () => (
    <InfoBlock
        className={cls.section}
        textContainerClassName={cls.textContainer}
        title="Our Values"
        description={`Our story is one of continuous growth and evolution.
                    We started as a small team with big dreams, determined to 
                    create a real estate platform that transcended the ordinary.`}
    >
        <div className={cls.table}>
            {companyValues.map(({ Icon, description, title }, i) => (
                <div className={cls.tabWrap}>
                    <VStack
                        className={cls.tab}
                        key={i}
                    >
                        <HStack className={cls.tabHeader}>
                            <Icon className={cls.icon} />
                            <span className={cls.title}>{title}</span>
                        </HStack>
                        <p>{description}</p>
                    </VStack>
                </div>
            ))}
        </div>
    </InfoBlock>
);
