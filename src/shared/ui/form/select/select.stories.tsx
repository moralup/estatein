import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';

const meta = {
    title: 'DIRECTORY/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {

};
