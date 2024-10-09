import type { EventObject } from 'react-alice-carousel';
import type { BaseCardProps } from 'shared/ui/containers';
import type {
    CardListSettingType,
    NavigationViewType,
    ResponsiveManagerQuantityType,
} from '../model/types';

import AliceCarousel, { Responsive } from 'react-alice-carousel';
import { useState } from 'react';
import { useCreateElements, useNumberOfItems } from '../model/hooks';
import { useThrottle } from 'shared/lib/hooks/useThrottle';
import { numberFormatter } from 'shared/lib/numberFormatter';

import { HStack, VStack } from 'shared/ui/stack';
import { Button } from 'shared/ui/button';
import ArrowRightIcon from 'shared/assets/icons/arrow-right.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './carousel.module.scss';
import './alice-carousel.scss';

export type CarouselProps<P extends BaseCardProps<object>> = {
    /** Additional styles. */
    className?: string;
    /** Defines view of footer */
    navigationView?: NavigationViewType;
    /** An optional object that defines the responsive behavior */
    responsiveManager?: ResponsiveManagerQuantityType;
    /** Animation duration of item swipe. Default - 1000 */
    animationDuration?: number;
} & CardListSettingType<P>;

// prettier-ignore
export const Carousel = <P extends BaseCardProps<object>>(props: CarouselProps<P>) => {
    const {
        className,
        responsiveManager,
        navigationView = 'right',
        animationDuration = 1000,
        ...cardListSetting
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const items = useCreateElements(
        cardListSetting as CardListSettingType<BaseCardProps<object>>,
    );
    const numberOfItems = useNumberOfItems(responsiveManager);

    const isSlidePrev = activeIndex > 0;
    const isSlideNext = items.length - numberOfItems > activeIndex;

    const slidePrev = useThrottle(() => {
        if (isSlidePrev) setActiveIndex(activeIndex - 1);
    }, animationDuration);

    const slideNext = useThrottle(() => {
        if (isSlideNext) setActiveIndex(activeIndex + 1);
    }, animationDuration);

    const onSlideChanged = (e: EventObject) => setActiveIndex(e.item);

    const getNavigationLabel = () => {
        const currentCount = numberFormatter(activeIndex + 1);
        const length = numberFormatter(items.length);
        const resultCount = isSlideNext ? currentCount : length;

        return `${resultCount} of ${length}`;
    };

    const isRenderNavigation = items.length > numberOfItems;

    return (
        <VStack
            className={clsx(cls.carousel, className)}
            align="normal"
        >
            <div style={{ margin: `0 -${cardListSetting.gap / 2}px` }}>
                <AliceCarousel
                    animationDuration={animationDuration}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                    activeIndex={activeIndex}
                    responsive={responsiveManager as Responsive}
                    onSlideChanged={onSlideChanged}
                />
            </div>
            {isRenderNavigation && (
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
                            className={clsx(
                                cls.arrowIcon,
                                cls.arrowIcon__rotated,
                            )}
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
            )}
        </VStack>
    );
};
