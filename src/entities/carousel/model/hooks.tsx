import { useMemo } from 'react';
import type { ResponsiveManagerQuantityType } from './types';
import { CardListSettingType } from './types';
import { BaseCardProps } from 'shared/ui/containers';

/**
 * Determines the number of items to be displayed based on the current window width
 * and a responsive manager configuration.
 *
 * @param responsiveManager - An optional object that defines the responsive behavior.
 *
 * @returns The number of items to be displayed based on the current window width.
 * If no responsive manager is provided or no matching width is found, it defaults to 1.
 */

export const useNumberOfItems = (responsiveManager?: ResponsiveManagerQuantityType) => {
    return useMemo(() => {
        if (!responsiveManager) return 1;
        /**
         * WIDTH - min viewport width to display ITEMS
         * ITEMS - optimal number of items when viewport width is larger than WIDTH
         *
         * [[WIDTH, { ITEMS: number } ], [...], ...]
         */
        const responsiveManagerItemInArray = Object.entries(responsiveManager)
            .sort(([a], [b]) => Number(b) - Number(a))
            .find(([width]) => window.innerWidth > Number(width));

        if (responsiveManagerItemInArray) {
            return responsiveManagerItemInArray[1].items;
        }

        return 1;
    }, [responsiveManager]);
};

/**
 * Creates an array of components based on the provided props.
 *
 * @param Component - The component to be created for each element in the array.
 * @param componentsProps - An array of objects containing props for each component.
 * @param commonProps - Common props to be applied to all created components.
 * @param className - Additional styles to be applied to all created components.
 *
 * @returns An memorized array of created Component.
 */

export const useCreateElements = ({
    Card,
    dataset,
    cardProps,
    gap,
}: CardListSettingType<BaseCardProps<object>>) => {
    return useMemo(() => {
        return dataset.map((data, i) => (
            <div
                className=""
                key={i}
                data-value={i + 1}
                style={{ margin: `0 ${gap / 2}px`, height: '100%' }}
            >
                <Card
                    data={data}
                    {...cardProps}
                />
            </div>
        ));
    }, [Card, cardProps, dataset, gap]);
};
