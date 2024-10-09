import { FC, ReactNode } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './flex.module.scss';

export interface FlexProps {
    children: ReactNode;
    justify?: 'center' | 'left' | 'right' | 'between';
    align?: 'center' | 'left' | 'right' | 'normal';
    direction?: 'column' | 'row';
    className?: string;
}

export const Flex: FC<FlexProps> = props => {
    const {
        className,
        align = 'center',
        justify = 'left',
        direction = 'column',
        children,
    } = props;

    return (
        <div
            className={clsx(
                cls.flex,
                cls[`align_${align}`],
                cls[`justify_${justify}`],
                cls[`direction_${direction}`],
                className,
            )}
        >
            {children}
        </div>
    );
};
