import type { Meta, StoryObj } from '@storybook/react';
import { OurValues } from './ourValues';

const meta = {
    title: 'DIRECTORY/OurValues',
    component: OurValues,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof OurValues>;

export default meta;

type Story = StoryObj<typeof OurValues>;

export const Primary: Story = {

};
