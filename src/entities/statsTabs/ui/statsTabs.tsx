import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './statsTabs.module.scss';
import { Tab } from 'shared/ui/tab';

interface StatsTabsProps {
    className?: string;
}

export const StatsTabs: FC<StatsTabsProps> = ({ className }) => {
    return (
        <div className={clsx(cls.tabs, className)}>
            <Tab mini>
                <h3 className={cls.title}>200+</h3>
                <p className={cls.desc}> Happy Customers</p>
            </Tab>
            <Tab mini>
                <h3 className={cls.title}>10k+</h3>
                <p className={cls.desc}>Properties For Clients</p>
            </Tab>
            <Tab mini>
                <h3 className={cls.title}>16+</h3>
                <p className={cls.desc}> Years of Experience</p>
            </Tab>
        </div>
    );
};
