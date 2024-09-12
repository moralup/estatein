import type { FC } from 'react';
import { Flex, type FlexProps } from 'shared/ui/stack/flex/flex';
import cls from './container.module.scss';
import { clsx } from 'shared/lib/clsx';

export const Container: FC<FlexProps> = props => {
    const { className, children, ...otherProps } = props;

    return (
        <Flex
            className={clsx(cls.container, className)}
            align={otherProps.align || 'left'}
            {...otherProps}
        >
            {children}
        </Flex>
    );
};
