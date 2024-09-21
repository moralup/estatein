import type { FC, ImgHTMLAttributes, ReactElement } from 'react';
import { useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage: FC<AppImageProps> = props => {
    const {
        //
        className,
        src,
        alt,
        fallback,
        errorFallback,
        ...otherProps
    } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        if (src) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setIsLoading(false);
            };
            img.onerror = () => {
                setHasError(true);
                setIsLoading(false);
            };
        } else {
            setHasError(true);
        }
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...otherProps}
        />
    );
};
