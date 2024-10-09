import { CardSize } from 'shared/ui/containers';
import { BreakpointType } from 'shared/types/breakpoints';

export type responsiveManagerType<T = any> = Partial<Record<BreakpointType, T>>;

export type QuantityInList = 1 | 2 | 3;
export type ListGapType = 15 | 20 | 30;
export type TextWidthRange = '80%' | '85%' | '100%';

export type ResponsiveManagerSizeType = responsiveManagerType<CardSize>;
export type ResponsiveManagerGapType = responsiveManagerType<ListGapType>;
export type ResponsiveManagerTextWidthType = responsiveManagerType<TextWidthRange>;
