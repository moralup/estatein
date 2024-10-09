import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './select';
import Icon from 'shared/assets/icons/domain-icon.svg';

const meta = {
    title: 'shared/form/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    args: {
        options: [
            { label: 'Label option 1', value: 'value option 1' },
            { label: 'Label option 2', value: 'value option 2' },
            { label: 'Label option 3', value: 'value option 3' },
            { label: 'Label option 4', value: 'value option 4' },
            { label: 'Label option 5', value: 'value option 5' },
        ],
        value: 'Options',
        onChangeSelect: alert,
    },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {};

export const WithLabel: Story = {
    args: {
        label: 'Label',
    },
};

export const WithIcon: Story = {
    args: {
        Icon,
    },
};

export const BackgroundGray08: Story = {
    args: {
        background: 'gray08',
    },
};
