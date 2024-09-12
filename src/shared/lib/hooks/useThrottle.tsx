import { useCallback, useEffect, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: any[]) => void;

/**
 * @param callback The original, non throttled function (You can pass any number of args to it).
 * @param delay The delay (in ms) for the function to return.
 * @returns The throttled function, which will run only if (delay) ms have passed.
 */
export const useThrottle = (
    callback: SomeFunction,
    delay: number,
) => {
    const timer = useRef<Timer>();

    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    return useCallback((...args: any[]) => {
        if (!timer.current) {
            callback(...args);
            timer.current = setTimeout(() => {
                timer.current = undefined;
            }, delay);
        }
    }, [callback, delay]);
};
