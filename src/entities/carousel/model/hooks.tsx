import { type FC, useMemo } from 'react';
import type { ResponsiveManagerType } from './types';

/**
 * @param responsiveManager - An optional object configuring the number of elements displayed on the screen.
 *
 * @returns The number of elements that should be displayed on the screen
 */
export const useNumberOfElements = (
    responsiveManager?: ResponsiveManagerType,
) => {
    return useMemo(() => {
        if (!responsiveManager) return 1;

        const responsiveManagerItem = Object.entries(responsiveManager)
            .sort(([a], [b]) => Number(b) - Number(a))
            .find(([width]) => window.innerWidth > Number(width));

        if (responsiveManagerItem) return responsiveManagerItem[1].items;

        return 1;
    }, [responsiveManager]);
};

/**
 * @param elementsProps - Array of props that be spread to the card
 * @param Component - Card that is an element of a list
 * @param className - Optional string is className of card
 *
 * @returns array of react elements
 */

export const useCreateElements = <P, >(
    elementsProps: P[],
    Component: FC<P>,
    className?: string,
) => useMemo(() => {
        return elementsProps.map((props, i) => (
            <Component
                key={i}
                className={className}
                data-value={i + 1}
                {...props}
            />
        ));
    }, [Component, className, elementsProps]);
