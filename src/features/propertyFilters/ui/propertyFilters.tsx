import type { FC } from 'react';
import {
    buildYears,
    locations,
    pricingRanges,
    propertySizes,
    propertyTypes,
} from 'widgets/promoProperties/model/consts';

import { Button } from 'shared/ui/button';
import { Select } from 'shared/ui/form';

import LocationIcon from 'shared/assets/icons/location-icon.svg';
import PropertyIcon from 'shared/assets/icons/property-type-icon.svg';
import MoneyIcon from 'shared/assets/icons/money-icon.svg';
import CubeIcon from 'shared/assets/icons/cube-icon.svg';
import CalendarIcon from 'shared/assets/icons/calendar-icon.svg';
import LoupeIcon from 'shared/assets/icons/loupe-icon.svg';

import { clsx } from 'shared/lib/clsx';
import cls from './propertyFilters.module.scss';

interface PropertyFiltersProps {
    className?: string;
}

export const PropertyFilters: FC<PropertyFiltersProps> = ({ className }) => {
    return (
        <div className={clsx(cls.findPropertyForm, className)}>
            <div className={cls.header}>
                <span className={cls.header__text}>Search For A Property</span>
                <Button
                    theme="background"
                    className={cls.btnSearch}
                >
                    <LoupeIcon />
                    <span className={cls.btnSearch__text}>Find Property</span>
                </Button>
            </div>
            <div className={cls.selects}>
                <Select
                    zIndex={5}
                    Icon={LocationIcon}
                    value="Location"
                    options={locations}
                    background="gray08"
                />
                <Select
                    zIndex={4}
                    Icon={PropertyIcon}
                    value="Property Type"
                    options={propertyTypes}
                    background="gray08"
                />
                <Select
                    zIndex={3}
                    Icon={MoneyIcon}
                    value="Pricing Range"
                    options={pricingRanges}
                    background="gray08"
                />
                <Select
                    zIndex={2}
                    Icon={CubeIcon}
                    value="Property Size"
                    options={propertySizes}
                    background="gray08"
                />
                <Select
                    zIndex={1}
                    Icon={CalendarIcon}
                    value="Build Year"
                    options={buildYears}
                    background="gray08"
                />
            </div>
        </div>
    );
};
