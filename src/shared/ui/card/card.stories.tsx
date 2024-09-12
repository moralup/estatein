import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta = {
    title: 'DIRECTORY/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {

};
