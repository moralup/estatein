import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import PhoneIcon from 'shared/assets/storybook/images/phone-icon.svg';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        label: 'Label',
        placeholder: 'placeholder',
    },
};

export const WithoutLabel: Story = {
    args: {
        placeholder: 'placeholder',
    },
};

export const WithoutPlaceholder: Story = {
    args: {
        label: 'Label',
    },
};

export const WithIcon: Story = {
    args: {
        label: 'Phone',
        Icon: PhoneIcon,
        placeholder: 'Enter Your Number',
    },
};
