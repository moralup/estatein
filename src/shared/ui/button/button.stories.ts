import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './button';
import { containerDecorator } from 'shared/config/storybook';

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

export const Prime: Story = { decorators: containerDecorator(400) };

export const GrayBackground: Story = {
    args: {
        theme: 'grayBackground',
    },
    decorators: containerDecorator(400),
};

export const Background: Story = {
    args: {
        theme: 'background',
    },
    decorators: containerDecorator(400),
};

export const Max: Story = {
    args: {
        max: true,
        theme: 'background',
    },
    decorators: containerDecorator(400),
};
