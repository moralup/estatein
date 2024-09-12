import type { Meta, StoryObj } from '@storybook/react';
import { Deal } from './deal';

const meta = {
    title: 'DIRECTORY/Deal',
    component: Deal,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof Deal>;

export default meta;

type Story = StoryObj<typeof Deal>;

export const Primary: Story = {

};
