import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './button';
import { outlineDecorator } from 'shared/config/storybook/outlineDecorator/outlineDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn(), children: 'click me' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {};

export const GrayBackground: Story = {
    args: {
        theme: 'grayBackground',
    },
};

export const Background: Story = {
    args: {
        theme: 'background',
    },
};

export const Max: Story = {
    args: {
        max: true,
        theme: 'background',
    },
    decorators: outlineDecorator(400),
};
