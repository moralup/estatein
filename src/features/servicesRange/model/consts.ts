import type { ServiceI } from './types';

import RoundCameraIcon from 'shared/assets/icons/round-camera-icon.svg';
import RoundHousesIcon from 'shared/assets/icons/round-houses-icon.svg';
import RoundHouseIcon from 'shared/assets/icons/round-house-icon.svg';
import RoundSunIcon from 'shared/assets/icons/round-sun-icon.svg';

export const services: ServiceI[] = [
    {
        Icon: RoundHouseIcon,
        text: 'find your dream home',
    },
    {
        Icon: RoundCameraIcon,
        text: 'unlock property value',
    },
    {
        Icon: RoundHousesIcon,
        text: 'effortless property management',
    },
    {
        Icon: RoundSunIcon,
        text: 'smart investments, informed decisions',
    },
];
