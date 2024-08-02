import type { Meta, StoryObj } from '@storybook/react';
import { RatingStar } from './ratingStar';

const meta = {
    title: 'shared/RatingStar',
    component: RatingStar,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof RatingStar>;

export default meta;

type Story = StoryObj<typeof RatingStar>;

export const Rate0: Story = {};

export const Rate3: Story = {
    args: {
        rating: 3,
    },
};

export const Rate5: Story = {
    args: {
        rating: 5,
    },
};
