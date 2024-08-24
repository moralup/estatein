import { FC } from 'react';
import { stats } from '../../model/consts';
import { Tab } from 'shared/ui/tab';
import { clsx } from 'shared/lib/clsx';
import cls from './statsTabs.module.scss';

interface StatsTabsProps {
    className?: string;
}

export const StatsTabs: FC<StatsTabsProps> = ({ className }) => {
    return (
        <div className={clsx(cls.tabs, className)}>
            {stats.map(({ description, title }) => (
                <Tab key={title} mini>
                    <h3 className={cls.title}>{title}</h3>
                    <p className={cls.desc}>{description}</p>
                </Tab>
            ))}
        </div>
    );
};
