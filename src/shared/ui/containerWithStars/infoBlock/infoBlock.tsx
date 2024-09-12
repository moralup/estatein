import type { FC, ReactNode } from 'react';
import type { FlexProps } from 'shared/ui/stack/flex/flex';
import { Container } from '../container/container';
import Stars from 'shared/assets/icons/deltoids-icon.svg';
import { clsx } from 'shared/lib/clsx';
import cls from './infoBlock.module.scss';

interface InfoBlockProps extends TypedOmit<FlexProps, 'children'> {
    title?: string;
    description?: string;
    children?: ReactNode;
    textContainerClassName?: string;
}

export const InfoBlock: FC<InfoBlockProps> = props => {
    const {
        className,
        textContainerClassName,
        children,
        description,
        title,
        ...otherProps
    } = props;

    return (
        <Container className={className} {...otherProps}>
            <div className={clsx(cls.textContainer, textContainerClassName)}>
                <Stars className={cls.stars} />
                {title && <h2 className={cls.title}>{title}</h2>}
                {description && <p>{description}</p>}
            </div>
            {children}
        </Container>
    );
};
