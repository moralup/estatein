import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SendEmail } from './sendEmail';

const SendEmailWrapper = () => {
    const [value, setValue] = useState('');

    return (
        <SendEmail
            value={value}
            onChange={setValue}
            onSubmit={value => alert(`send email --> ${value}`)}
        />
    );
};

const meta = {
    title: 'features/SendEmail',
    component: SendEmailWrapper,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof SendEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
