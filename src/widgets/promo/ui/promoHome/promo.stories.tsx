import type { Meta, StoryObj } from '@storybook/react';
import { Promo } from './promo';

const meta = {
    title: 'widget/promo/Promo',
    component: Promo,
    parameters: {
        // layout: 'centered',
    },
} satisfies Meta<typeof Promo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
