import type { Meta, StoryObj } from '@storybook/react';
import { GuideToBuyingEstate } from './guideToBuyingEstate';

const meta = {
    title: 'DIRECTORY/GuideToBuyingEstate',
    component: GuideToBuyingEstate,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof GuideToBuyingEstate>;

export default meta;

type Story = StoryObj<typeof GuideToBuyingEstate>;

export const Primary: Story = {

};
