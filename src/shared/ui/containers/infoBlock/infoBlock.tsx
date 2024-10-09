import { useMemo, type FC } from 'react';
import { Flex, type FlexProps } from 'shared/ui/stack/flex/flex';
import Stars from 'shared/assets/icons/deltoids-icon.svg';
import { clsx } from 'shared/lib/clsx';
import cls from './infoBlock.module.scss';

export interface InfoBlockProps extends FlexProps {
    /** Title of the information block */
    title?: string;
    /** Description of the information block */
    description?: string;
    /** Stars above text. Default - true */
    isStars?: boolean;
    /** Sets width of text container in InfoBlock */
    textWidth?: string | number;
}

export const InfoBlock: FC<InfoBlockProps> = props => {
    const {
        className,
        children,
        description,
        title,
        isStars = true,
        textWidth,
        align,
        ...flexOptions
    } = props;

    const textContainerStyle = useMemo(
        () => ({ width: textWidth }),
        [textWidth],
    );

    return (
        <Flex
            className={clsx(cls.container, className)}
            align={align || 'left'}
            {...flexOptions}
        >
            <div
                style={textContainerStyle}
                className={clsx(cls.textContainer)}
            >
                {isStars && <Stars className={cls.stars} />}
                {title && <h2 className={cls.title}>{title}</h2>}
                {description && <p>{description}</p>}
            </div>
            {children}
        </Flex>
    );
};
