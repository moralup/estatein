import type { FC } from 'react';

import { services } from '../model/consts';

import { Card } from 'shared/ui/card';
import ArrowIcon from 'shared/assets/icons/arrow-up-right.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './servicesRange.module.scss';

interface ServicesRangeProps {
    className?: string;
}

export const ServicesRange: FC<ServicesRangeProps> = ({ className }) => {
    return (
        <Card
            theme="outline"
            className={clsx(cls.list, className)}
        >
            {services.map(({ Icon, text }) => (
                <Card
                    background="gray-10"
                    key={text}
                    justify="center"
                    className={cls.card}
                >
                    <ArrowIcon className={cls.arrowIcon} />
                    <Icon className={cls.icon} />
                    <span className={cls.text}>{text}</span>
                </Card>
            ))}
        </Card>
    );
};
