import type { PersonI } from 'entities/person/model/types';
import davidBrown from 'shared/assets/images/team/David-Brown.png';
import maxMitchell from 'shared/assets/images/team/Max-Mitchell.png';
import michaelTurner from 'shared/assets/images/team/Michael-Turner.png';
import sarahJohnson from 'shared/assets/images/team/Sarah-Johnson.png';

export const teamData: PersonI[] = [
    {
        name: 'Max Mitchell',
        photo: maxMitchell,
        role: 'Founder',
    },
    {
        name: 'Sarah Johnson',
        photo: sarahJohnson,
        role: 'Chief Real Estate Officer',
    },
    {
        name: 'David Brown',
        photo: davidBrown,
        role: 'Head of Property Management',
    },
    {
        name: 'Michael Turner',
        photo: michaelTurner,
        role: 'Legal Counsel',
    },
];
