import { FC } from 'react';
import { EstateTagValue } from '../../model/types/estate';

import BathroomIcon from 'shared/assets/icons/bathroom-icon.svg';
import BedroomIcon from 'shared/assets/icons/bedroom-icon.svg';
import VillaIcon from 'shared/assets/icons/villa-icon.svg';

export const tagIconMap: Record<EstateTagValue, FC> = {
    Bathroom: BathroomIcon,
    Bedroom: BedroomIcon,
    Villa: VillaIcon,
};
