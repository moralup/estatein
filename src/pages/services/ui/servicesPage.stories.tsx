import type { Meta, StoryObj } from '@storybook/react';
import { ServicesPage } from './servicesPage';

const meta = {
    title: 'DIRECTORY/ServicesPage',
    component: ServicesPage,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof ServicesPage>;

export default meta;

type Story = StoryObj<typeof ServicesPage>;

export const Primary: Story = {

};
