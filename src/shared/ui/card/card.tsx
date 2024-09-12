import type { FC, ReactNode } from 'react';
import { Flex, type FlexProps } from '../stack/flex/flex';
import { clsx } from 'shared/lib/clsx';
import cls from './card.module.scss';

interface CardProps extends FlexProps {
    children: ReactNode;
    className?: string;
    background?: 'gray-10';
    border?: 'top' | 'bottom' | 'right' | 'left' | 'horizon';
    theme?: 'outline';
    /**
     * @example
     *
     * Mobile - Laptop - Desktop
     * s - 20px - 24px - 30px
     * m - 24px - 30px - 40px
     * l - 30px - 40px - 50px
     *
     */
    padding?: 's' | 'm' | 'l';
}

export const Card: FC<CardProps> = props => {
    const {
        className,
        children,
        border = 'default',
        background,
        align,
        gap,
        justify,
        direction,
        theme,
        padding,
    } = props;

    const cardClassName = clsx(
        cls.card,
        background && cls[`background_${background}`],
        theme && cls[`theme_${theme}`],
        padding && cls[`padding_${padding}`],
        cls[`border_${border}`],
        className,
    );

    return (
        <Flex
            align={align}
            gap={gap}
            className={cardClassName}
            direction={direction}
            justify={justify}
        >
            {children}
        </Flex>
    );
};
