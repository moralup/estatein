import { useMemo } from 'react';
import { sortedObjectEntries } from '../../lib/sortedObjectEntries';
import { responsiveManagerType } from '../../types/responsiveManagers';

export const useResponsiveSettings = <T>(
    responsiveManager: responsiveManagerType<T>,
): T => {
    const VIEWPORT_WIDTH = window.innerWidth;

    return useMemo(() => {
        const responsiveManagerEntries = sortedObjectEntries(responsiveManager);

        // eslint-disable-next-line no-restricted-syntax
        for (const [breakpoint, settings] of responsiveManagerEntries) {
            if (VIEWPORT_WIDTH > Number(breakpoint)) {
                return settings;
            }
        }

        const [, primarySetting] = responsiveManagerEntries.at(-1)!;

        return primarySetting;
    }, [VIEWPORT_WIDTH, responsiveManager]);
};
