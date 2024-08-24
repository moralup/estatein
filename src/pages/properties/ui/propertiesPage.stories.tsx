import type { Meta, StoryObj } from '@storybook/react';
import { PropertiesPage } from './propertiesPage';

const meta = {
    title: 'DIRECTORY/PropertiesPage',
    component: PropertiesPage,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof PropertiesPage>;

export default meta;

type Story = StoryObj<typeof PropertiesPage>;

export const Primary: Story = {

};
