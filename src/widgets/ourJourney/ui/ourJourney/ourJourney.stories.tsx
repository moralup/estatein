import type { Meta, StoryObj } from '@storybook/react';
import { OurJourney } from './ourJourney';

const meta = {
    title: 'DIRECTORY/OurJourney',
    component: OurJourney,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof OurJourney>;

export default meta;

type Story = StoryObj<typeof OurJourney>;

export const Primary: Story = {

};
