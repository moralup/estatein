import { FC } from 'react';
import { EstateTagValue } from '../../model/types/estate';

import BathroomIcon from 'shared/assets/icons/estate-card-tag/bathroom-icon.svg';
import BedroomIcon from 'shared/assets/icons/estate-card-tag/bedroom-icon.svg';
import VillaIcon from 'shared/assets/icons/estate-card-tag/villa-icon.svg';

export const tagIconMap: Record<EstateTagValue, FC<React.SVGProps<SVGSVGElement>>> = {
    Bathroom: BathroomIcon,
    Bedroom: BedroomIcon,
    Villa: VillaIcon,
};
