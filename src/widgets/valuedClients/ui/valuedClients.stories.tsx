import type { Meta, StoryObj } from '@storybook/react';
import { ValuedClients } from './valuedClients';

const meta = {
    title: 'DIRECTORY/ValuedClients',
    component: ValuedClients,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof ValuedClients>;

export default meta;

type Story = StoryObj<typeof ValuedClients>;

export const Primary: Story = {

};
