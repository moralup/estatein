/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { StepGuide } from './stepGuide';

const meta = {
    title: 'entities/StepGuide',
    component: StepGuide,
    parameters: {
        layout: 'centered',
    },
    args: {
        step: 1,
        title: 'Discover a World of Possibilities',
        description: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
    },
} satisfies Meta<typeof StepGuide>;

export default meta;

type Story = StoryObj<typeof StepGuide>;

export const Primary: Story = {};
