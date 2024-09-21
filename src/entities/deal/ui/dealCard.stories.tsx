/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { DealCard } from './dealCard';

const meta = {
    title: 'entities/Deal',
    component: DealCard,
    parameters: {
        layout: 'centered',
    },
    args: {
        deal: {
            since: '2019',
            company: 'ABC Corporation',
            website: 'https://web.site',
            domain: 'Commercial Real Estate',
            category: 'Luxury Home Development',
            feedback: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
        },
    },
} satisfies Meta<typeof DealCard>;

export default meta;

type Story = StoryObj<typeof DealCard>;

export const Primary: Story = {};
