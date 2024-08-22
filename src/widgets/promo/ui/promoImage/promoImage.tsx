/* eslint-disable jsx-a11y/alt-text */
import { FC, useState } from 'react';
// import { clsx } from 'shared/lib/clsx';
import cls from './promoImage.module.scss';
import houseImage from 'shared/assets/images/house.png';
import AbstractDesignCurves from 'shared/assets/images/abstract-design-promo.svg';

interface PromoImageProps {
    className?: string;
}

export const PromoImage: FC<PromoImageProps> = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={cls.container}>
            <AbstractDesignCurves className={cls.backImg} />
            <img
                style={{ opacity: isLoaded ? 1 : 0 }}
                className={cls.img}
                src={houseImage}
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
};
