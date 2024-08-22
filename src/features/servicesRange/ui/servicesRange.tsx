import type { FC } from 'react';

import { services } from '../model/consts';

import { Tab } from 'shared/ui/tab';
import { HStack } from 'shared/ui/stack';

import { clsx } from 'shared/lib/clsx';
import cls from './servicesRange.module.scss';

interface ServicesRangeProps {
    className?: string;
}

export const ServicesRange: FC<ServicesRangeProps> = ({ className }) => {
    return (
        <HStack
            gap={20}
            className={clsx(cls.servicesRange, className)}
        >
            {services.map(({ Icon, text }) => (
                <Tab
                    key={text}
                    justify="center"
                >
                    <Icon />
                    <span className={cls.text}>{text}</span>
                </Tab>
            ))}
        </HStack>
    );
};
