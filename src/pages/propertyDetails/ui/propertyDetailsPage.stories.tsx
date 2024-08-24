import type { Meta, StoryObj } from '@storybook/react';
import { PropertyDetailsPage } from './propertyDetailsPage';

const meta = {
    title: 'DIRECTORY/PropertyDetailsPage',
    component: PropertyDetailsPage,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof PropertyDetailsPage>;

export default meta;

type Story = StoryObj<typeof PropertyDetailsPage>;

export const Primary: Story = {

};
