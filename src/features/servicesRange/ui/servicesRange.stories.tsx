import type { Meta, StoryObj } from '@storybook/react';
import { ServicesRange } from './servicesRange';

const meta = {
    title: 'DIRECTORY/ServicesRange',
    component: ServicesRange,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof ServicesRange>;

export default meta;

type Story = StoryObj<typeof ServicesRange>;

export const Primary: Story = {};
