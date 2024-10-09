import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta = {
    title: 'shared/form/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {};

export const FullComplect: Story = {
    args: {
        label: 'Label',
        placeholder: 'Hello World!',
    },
};
