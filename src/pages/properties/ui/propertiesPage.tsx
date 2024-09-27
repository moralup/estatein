/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { clsx } from 'shared/lib/clsx';
import cls from './propertiesPage.module.scss';
import { Button } from 'shared/ui/button';
import { PromoProperties } from 'widgets/promoProperties';
import { CarouselObjectProperties } from 'widgets/carouselObject';
import { PropertyInquiryWidget } from 'widgets/propertyInquiryWidget';

export const PropertiesPage: FC = () => (
    <div className={cls.propertiesPage}>
        <PromoProperties />
        <CarouselObjectProperties className={cls.indent} view="propertiesPage" />
        <PropertyInquiryWidget className={cls.indent} />
    </div>
);
