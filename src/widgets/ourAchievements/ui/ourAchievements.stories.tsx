import type { Meta, StoryObj } from '@storybook/react';
import { OurAchievements } from './ourAchievements';

const meta = {
    title: 'DIRECTORY/OurAchievements',
    component: OurAchievements,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof OurAchievements>;

export default meta;

type Story = StoryObj<typeof OurAchievements>;

export const Primary: Story = {

};
