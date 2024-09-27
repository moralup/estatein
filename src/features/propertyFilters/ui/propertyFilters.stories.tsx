import type { Meta, StoryObj } from '@storybook/react';
import { PropertyFilters } from './propertyFilters';

const meta = {
    title: 'DIRECTORY/PropertyFilters',
    component: PropertyFilters,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof PropertyFilters>;

export default meta;

type Story = StoryObj<typeof PropertyFilters>;

export const Primary: Story = {

};
