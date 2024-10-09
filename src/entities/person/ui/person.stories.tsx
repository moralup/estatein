import type { Meta, StoryObj } from '@storybook/react';
import { personMaxMitchell } from 'shared/assets/storybook/data';
import { Person } from './person';

const meta = {
    title: 'entities/Person',
    component: Person,
    parameters: {
        layout: 'centered',
    },
    args: {
        person: personMaxMitchell,
    },
} satisfies Meta<typeof Person>;

export default meta;

type Story = StoryObj<typeof Person>;

export const Primary: Story = {};
