import { ComponentType } from 'react';
import type { Responsive } from 'react-alice-carousel';
import type { BreakpointType } from 'shared/types/breakpoints';
import { BaseCardProps } from 'shared/ui/containers';

export type ResponsiveManagerQuantityType = Partial<
    Record<BreakpointType, Responsive['key']>
>;

export type NavigationViewType = 'fullWidth' | 'right';

export type CardListSettingType<P extends BaseCardProps<object>> = {
    /** Component is list element. */
    Card: ComponentType<P>;
    /** An array of objects containing props for each component. */
    dataset: P['data'][];
    /** Common props to be applied to all created components. */
    cardProps?: Omit<P, 'data'>;
    // cardProps?: BaseCardProps;
    /** Gap between Cards */
    gap: number;
};
