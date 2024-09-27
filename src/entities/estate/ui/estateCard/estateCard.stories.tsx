import type { Meta, StoryObj } from '@storybook/react';
import { EstateCard } from './estateCard';
import { EstateI } from '../../model/types/estate';

const estate: EstateI = {
    title: 'Seaside Serenity Villa',
    description: `A stunning 4-bedroom, 3-bathroom villa in a peaceful 
    suburban neighborhood... Read More`,
    price: 550000,
    img: 'https://estateindubai.com/uploads/QXHmRFZbsa.webp',
    ambiance: 'Coastal Escapes - Where Waves Beckon.',
    tags: [
        { value: 'Bedroom', quantity: 4 },
        { value: 'Bathroom', quantity: 3 },
        { value: 'Villa' },
    ],
};

const meta = {
    title: 'entities/EstateCard',
    component: EstateCard,
    parameters: {
        layout: 'centered',
    },
    args: {
        estate,
    },
} satisfies Meta<typeof EstateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
