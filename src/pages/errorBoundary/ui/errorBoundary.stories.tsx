import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from './errorBoundary';

const meta = {
    title: 'DIRECTORY/ErrorBoundary',
    component: ErrorBoundary,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;

type Story = StoryObj<typeof ErrorBoundary>;

export const Primary: Story = {

};
