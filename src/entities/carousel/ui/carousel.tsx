import type { FC } from 'react';
import type { EventObject } from 'react-alice-carousel';
import type { NavigationViewType, ResponsiveManagerType } from '../model/types';

import AliceCarousel, { Responsive } from 'react-alice-carousel';
import { useState } from 'react';
import { useCreateElements, useNumberOfElements } from '../model/hooks';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { numberFormatter } from 'shared/lib/numberFormatter';

import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './carousel.module.scss';
import './alice-carousel.scss';

export interface CarouselProps<P> {
    /** Additional className */
    className?: string;
    /** An optional string is className for carousel wrapper. Needed for add negative indent */
    clsIndentList?: string;
    /** An optional string is className for card. Needed for add indent */
    clsIndentCard?: string;
    /** A Component is list element */
    Card: FC<P>;
    /** An array of props that be spread to the card */
    cardsProps: P[];
    /** A common props that is the same for every card */
    commonProps?: Partial<P>;
    /** An Optional string determining how the carousel footer be displayed for mobile screen. */
    navigationView?: NavigationViewType;
    /** An optional object configuring the number of elements displayed on the screen */
    responsiveManager?: ResponsiveManagerType;
}

const ANIMATION_DURATION = 1000;

export const Carousel = <P, >(props: CarouselProps<P>) => {
    const {
        className,
        clsIndentList,
        clsIndentCard,
        Card,
        cardsProps,
        commonProps,
        responsiveManager,
        navigationView = 'right',
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const items = useCreateElements(cardsProps, Card, clsIndentCard, commonProps);
    const numberOfElements = useNumberOfElements(responsiveManager);

    const isSlidePrev = activeIndex > 0;
    const isSlideNext = items.length - numberOfElements > activeIndex;

    const slidePrev = useThrottle(() => {
        setActiveIndex(isSlidePrev ? activeIndex - 1 : 0);
    }, ANIMATION_DURATION);

    const slideNext = useThrottle(() => {
        setActiveIndex(isSlideNext ? activeIndex + 1 : activeIndex);
    }, ANIMATION_DURATION);

    const onSlideChanged = (e: EventObject) => setActiveIndex(e.item);

    const getNavigationLabel = () => {
        const start = numberFormatter(activeIndex + 1);
        const length = numberFormatter(items.length);

        if (numberOfElements > 1) {
            const end = numberFormatter(activeIndex + numberOfElements);
            return `${start} - ${end} of ${length}`;
        }

        return `${start} of ${length}`;
    };

    return (
        <VStack className={clsx(cls.carousel, className)}>
            <div className={clsIndentList}>
                <AliceCarousel
                    animationDuration={ANIMATION_DURATION}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsiveManager as Responsive}
                    onSlideChanged={onSlideChanged}
                />
            </div>
            <HStack
                className={clsx(
                    cls.navigation,
                    cls[`navigation__${navigationView}`],
                )}
            >
                <Button
                    disabled={!isSlidePrev}
                    circle
                    theme="grayBackground"
                    onClick={slidePrev}
                    className={cls.btnArrow}
                >
                    <ArrowRightIcon
                        className={clsx(cls.arrowIcon, cls.arrowIcon__rotated)}
                    />
                </Button>
                <span className={cls.counter}>{getNavigationLabel()}</span>
                <Button
                    disabled={!isSlideNext}
                    circle
                    theme="grayBackground"
                    onClick={slideNext}
                    className={cls.btnArrow}
                >
                    <ArrowRightIcon className={cls.arrowIcon} />
                </Button>
            </HStack>
        </VStack>
    );
};
