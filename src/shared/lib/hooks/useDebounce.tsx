import { useCallback, useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;

/**
 * @param callback The original, non debounced function (You can pass any number of args to it).
 * @param delay The delay (in ms) for the function to return.
 * @returns DebouncedFunction - The debounced function, which will run only if the debounced function has not been called in the last (delay) ms.
 */

export const useDebounce = (callback: SomeFunction, delay: number) => {
    const timer = useRef<Timer>();

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, []);

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => callback(...args), delay);
        },
        [callback, delay],
    );
};
