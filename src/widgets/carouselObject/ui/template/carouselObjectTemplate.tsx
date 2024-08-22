import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './carouselObjectTemplate.module.scss';
import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import { Carousel } from './carousel';
import DeltoidsIcon from 'shared/assets/icons/deltoids-icon.svg';

interface WCTProps<P> {
    className?: string;
    ComponentCard: FC<P>;
    arrProps: P[];
    title: string;
    description: string;
    type: string;
}

export const CarouselObjectTemplate = <P, >(props: WCTProps<P>) => {
    const {
        //
        className,
        arrProps,
        ComponentCard,
        description,
        title,
        type,
    } = props;

    return (
        <div className={clsx(cls.widgetCarouselTemplateWrapper, className)}>
            <VStack
                gap={80}
                className={cls.widgetCarouselTemplate}
            >
                <DeltoidsIcon className={cls.deltoids} />
                <HStack
                    justify="between"
                    align="center"
                    gap={200}
                >
                    <VStack gap={14}>
                        <h3 className={cls.title}>{title}</h3>
                        <p className={cls.description}>
                            {description}
                        </p>
                    </VStack>
                    <Button
                        className={cls.btnViewAll}
                        theme="grayBackground"
                    >
                        {`View All ${type}`}
                    </Button>
                </HStack>
                <Carousel
                    ComponentCard={ComponentCard}
                    arrProps={arrProps}
                />
            </VStack>
        </div>
    );
};
