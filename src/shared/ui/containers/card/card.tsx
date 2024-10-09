import type { FC, ReactNode } from 'react';
import { Flex, type FlexProps } from 'shared/ui/stack/flex/flex';
import { clsx } from 'shared/lib/clsx';
import cls from './card.module.scss';

export type CardView = 'vertical' | 'horizon';
export type CardSize = 's' | 'm' | 'l';

export type BaseCardProps<T = undefined> = {
    className?: string;
    view?: CardView;
    size?: CardSize;
} & (T extends undefined ? {} : { data: T });

interface CardProps extends FlexProps {
    children: ReactNode;
    className?: string;
    background?: 'gray-10' | 'gray-08';
    theme?: 'outline' | 'angleGradient';
}

export const Card: FC<CardProps> = props => {
    const {
        className,
        theme,
        background = 'gray-08',
        children,
        ...flexOptions
    } = props;

    const cardClassName = clsx(
        cls.card,
        cls[`background_${background}`],
        theme && cls[`theme_${theme}`],
        className,
    );

    return (
        <Flex
            className={cardClassName}
            {...flexOptions}
        >
            {children}
        </Flex>
    );
};
