import { Responsive } from 'react-alice-carousel';
import { BreakpointType } from 'shared/types/breakpoints';

export type ResponsiveManagerType = Partial<
    Record<Exclude<BreakpointType, 0>, Responsive['key']>
>;

export type NavigationViewType = 'fullWidth' | 'right';
