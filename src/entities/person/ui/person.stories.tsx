import type { Meta, StoryObj } from '@storybook/react';
import { Person } from './person';

const meta = {
    title: 'DIRECTORY/Person',
    component: Person,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof Person>;

export default meta;

type Story = StoryObj<typeof Person>;

export const Primary: Story = {

};
