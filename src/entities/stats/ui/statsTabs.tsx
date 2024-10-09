import type { FC } from 'react';
import type { StatI } from 'shared/types/server';

import { Card } from 'shared/ui/containers';

import { clsx } from 'shared/lib/clsx';
import cls from './statsTabs.module.scss';

interface StatsTabsProps {
    className?: string;
    stats: StatI[];
    size?: 'min' | 'max';
}

export const StatsTabs: FC<StatsTabsProps> = props => {
    const { className, stats, size = 'min' } = props;

    return (
        <div className={clsx(cls.stats, cls[`stats__${size}`], className)}>
            {stats.map(({ description, title }) => (
                <Card
                    key={title}
                    className={cls.statsCard}
                    background="gray-10"
                >
                    <h3 className={clsx(cls.title)}>{title}</h3>
                    <p className={cls.desc}>{description}</p>
                </Card>
            ))}
        </div>
    );
};
