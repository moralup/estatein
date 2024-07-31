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
                <h3 className={cls.tab_title}>200+</h3>
                <p className={cls.tab_desc}> Happy Customers</p>
            </Tab>
            <Tab mini>
                <h3 className={cls.tab_title}>10k+</h3>
                <p className={cls.tab_desc}>Properties For Clients</p>
            </Tab>
            <Tab mini>
                <h3 className={cls.tab_title}>16+</h3>
                <p className={cls.tab_desc}> Years of Experience</p>
            </Tab>
        </div>
    );
};
