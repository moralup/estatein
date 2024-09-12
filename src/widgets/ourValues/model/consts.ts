/* eslint-disable max-len */
import type { CompanyValueI } from './types';
import BonnetIcon from 'shared/assets/icons/our-values/bonnet-icon.svg';
import PersonsIcon from 'shared/assets/icons/our-values/persons-icon.svg';
import StarIcon from 'shared/assets/icons/our-values/star-icon.svg';

// prettier-ignore
export const companyValuesMatrix: CompanyValueI[][] = [
    [
        {
            Icon: StarIcon,
            title: 'Trust',
            description: 'Trust is the cornerstone of every successful real estate transaction.',
        },
        {
            Icon: BonnetIcon,
            title: 'Excellence',
            description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
        },
    ],
    [
        {
            Icon: PersonsIcon,
            title: 'Client-Centric',
            description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
        },
        {
            Icon: StarIcon,
            title: 'Our Commitment',
            description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
        },
    ],
];
