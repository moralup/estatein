import type { Meta, StoryObj } from '@storybook/react';
import { StatsTabs } from './statsTabs';

const meta = {
    title: 'widget/promo/StatsTabs',
    component: StatsTabs,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof StatsTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
