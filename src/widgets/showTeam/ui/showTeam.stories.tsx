import type { Meta, StoryObj } from '@storybook/react';
import { ShowTeam } from './showTeam';

const meta = {
    title: 'DIRECTORY/ShowTeam',
    component: ShowTeam,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof ShowTeam>;

export default meta;

type Story = StoryObj<typeof ShowTeam>;

export const Primary: Story = {

};
