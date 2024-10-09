import type { CarouselProps } from 'entities/carousel';
import type { InfoBlockProps } from 'shared/ui/containers/infoBlock/infoBlock';
import { type BaseCardProps, InfoBlock } from 'shared/ui/containers';
import { Carousel } from 'entities/carousel';
import { Button } from 'shared/ui/button';
import { VStack } from 'shared/ui/stack';
import { clsx } from 'shared/lib/clsx';
import cls from './carouselObjectTemplate.module.scss';

export type CarouselTemplateProps<P extends BaseCardProps<object>> = {
    /** That is list item */
    type?: string;
} & CarouselProps<P> &
    Pick<InfoBlockProps, 'textWidth' | 'title' | 'description'>;

export const CarouselTemplate = <P extends BaseCardProps<object>>(
    props: CarouselTemplateProps<P>,
) => {
    const {
        Card,
        dataset,
        cardProps,
        gap,
        type,
        title,
        description,
        responsiveManager,
        navigationView,
        animationDuration,
        className,
        textWidth,
    } = props;

    return (
        <VStack className={clsx(cls.template, className)}>
            <InfoBlock
                className={cls.textContainer}
                description={description}
                title={title}
                textWidth={textWidth}
            >
                {type && (
                    <Button
                        className={cls.btnViewAll}
                        theme="grayBackground"
                    >
                        {`View All ${type}`}
                    </Button>
                )}
            </InfoBlock>
            <Carousel
                Card={Card}
                dataset={dataset}
                animationDuration={animationDuration}
                cardProps={cardProps}
                responsiveManager={responsiveManager}
                gap={gap}
                navigationView={navigationView}
            />
        </VStack>
    );
};
