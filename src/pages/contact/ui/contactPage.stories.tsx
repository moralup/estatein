import type { Meta, StoryObj } from '@storybook/react';
import { ContactPage } from './contactPage';

const meta = {
    title: 'DIRECTORY/ContactPage',
    component: ContactPage,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof ContactPage>;

export default meta;

type Story = StoryObj<typeof ContactPage>;

export const Primary: Story = {

};
