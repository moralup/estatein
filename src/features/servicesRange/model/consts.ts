import type { ServiceI } from './types';

import RoundCameraIcon from 'shared/assets/icons/round-camera-icon.svg';
import RoundHousesIcon from 'shared/assets/icons/round-houses-icon.svg';
import RoundHouseIcon from 'shared/assets/icons/round-house-icon.svg';
import RoundSunIcon from 'shared/assets/icons/round-sun-icon.svg';

export const services: ServiceI[] = [
    {
        Icon: RoundCameraIcon,
        text: 'Find your dream home',
    },
    {
        Icon: RoundHousesIcon,
        text: 'Unlock Property Value',
    },
    {
        Icon: RoundHouseIcon,
        text: 'Effortless Property Management',
    },
    {
        Icon: RoundSunIcon,
        text: 'Smart Investments, Informed Decisions',
    },
];
