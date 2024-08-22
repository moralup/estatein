import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

const meta = {
    title: 'DIRECTORY/Footer',
    component: Footer,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {

};
