import { FC, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import type { EventObject } from 'react-alice-carousel';

import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg';

import './alice-carousel.scss';
import cls from './carouselObjectTemplate.module.scss';
import { numberFormatter } from 'shared/lib/numberFormatter';

const responsive = {
    0: { items: 3 },
};

const createItems = <P, >(itemsProps: P[], Component: FC<P>) => {
    return itemsProps.map((props, i) => (
        <Component
            key={i}
            data-value={i + 1}
            {...props}
        />
    ));
};

interface CarouselProps<P> {
    ComponentCard: FC<P>;
    arrProps: P[];
}

export const Carousel = <P, >(props: CarouselProps<P>) => {
    const { ComponentCard, arrProps } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems(arrProps, ComponentCard));
    const isSlidePrev = activeIndex >= 3;
    const isSlideNext = items.length - 4 >= activeIndex;
    const slidePrev = () => setActiveIndex(isSlidePrev ? activeIndex - 3 : 0);
    const slideNext = () => setActiveIndex(isSlideNext ? activeIndex + 3 : activeIndex);
    const syncActiveIndexForSwipeGestures = (e: EventObject) => setActiveIndex(e.item);

    const onSlideChanged = (e: EventObject) => {
        syncActiveIndexForSwipeGestures(e);
    };

    return (
        <VStack gap={50}>
            <AliceCarousel
                disableDotsControls
                disableButtonsControls
                items={items}
                activeIndex={activeIndex}
                responsive={responsive}
                onSlideChanged={onSlideChanged}
                // autoWidth
            />
            <HStack justify="between" align="left" className={cls.footer}>
                <span className={cls.quantity}>
                    {`${numberFormatter(activeIndex / 3 + 1)} of ${numberFormatter(items.length / 3)}`}
                </span>
                <HStack gap={10}>
                    <Button disabled={!isSlidePrev} circle theme="grayBackground" onClick={slidePrev}>
                        <ArrowRightIcon className={cls.reverted} />
                    </Button>
                    <Button disabled={!isSlideNext} circle theme="grayBackground" onClick={slideNext}>
                        <ArrowRightIcon />
                    </Button>
                </HStack>
            </HStack>
        </VStack>
    );
};

// const isSlidePrev = activeIndex > 0;
// const isSlideNext = items.length - 1 >= activeIndex;
// const slidePrev = () => setActiveIndex(activeIndex - 1);
// const slideNext = () => setActiveIndex(activeIndex + 1);
