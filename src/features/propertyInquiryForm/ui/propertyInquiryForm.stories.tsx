import type { Meta, StoryObj } from '@storybook/react';
import { PropertyInquiryForm } from './propertyInquiryForm';

const meta = {
    title: 'DIRECTORY/PropertyInquiryForm',
    component: PropertyInquiryForm,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof PropertyInquiryForm>;

export default meta;

type Story = StoryObj<typeof PropertyInquiryForm>;

export const Primary: Story = {

};
