import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import PhoneIcon from 'shared/assets/storybook/images/phone-icon.svg';

const meta = {
    title: 'shared/form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const Label: Story = {
    args: {
        label: 'Label',
    },
};

export const Placeholder: Story = {
    args: {
        placeholder: 'placeholder',
    },
};

export const Icon: Story = {
    args: {
        Icon: PhoneIcon,
    },
};

export const LabelAndPlaceholder: Story = {
    args: {
        label: 'Label',
        placeholder: 'placeholder',
    },
};

export const FullComplect: Story = {
    args: {
        Icon: PhoneIcon,
        label: 'Label',
        placeholder: 'placeholder',
    },
};

export const WithValue: Story = {
    args: {
        Icon: PhoneIcon,
        label: 'Label',
        placeholder: 'placeholder',
        value: 'Hello World!',
    },
};
