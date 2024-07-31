import { FC, ReactNode } from 'react';
import ArrowUpRightIcon from 'shared/assets/icons/arrow-up-right.svg';
import { clsx } from 'shared/lib/clsx';
import cls from './tab.module.scss';

// theme?: 'normal' | 'outline';
interface TabProps {
    className?: string;
    mini?: boolean;
    children: ReactNode;
    justify?: 'center' | 'left' | 'right';
}

export const Tab: FC<TabProps> = props => {
    const { className, children, mini, justify = 'left' } = props;

    return (
        <div
            className={clsx(cls.tab, mini && cls.mini, cls[justify], className)}
        >
            {!mini && <ArrowUpRightIcon className={cls.icon} />}
            {children}
        </div>
    );
};
