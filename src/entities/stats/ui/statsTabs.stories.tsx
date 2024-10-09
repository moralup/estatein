import type { Meta, StoryObj } from '@storybook/react';
import { StatsTabs } from './statsTabs';

const meta = {
    title: 'entities/StatsTabs',
    component: StatsTabs,
    parameters: {
        layout: 'centered',
    },
    args: {
        stats: [
            {
                description:
                    'Description stat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                title: 'Title Stat',
            },
        ],
    },
} satisfies Meta<typeof StatsTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
