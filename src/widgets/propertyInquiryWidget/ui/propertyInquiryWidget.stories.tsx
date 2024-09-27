import type { Meta, StoryObj } from '@storybook/react';
import { PropertyInquiryWidget } from './propertyInquiryWidget';

const meta = {
    title: 'DIRECTORY/PropertyInquiryWidget',
    component: PropertyInquiryWidget,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof PropertyInquiryWidget>;

export default meta;

type Story = StoryObj<typeof PropertyInquiryWidget>;

export const Primary: Story = {

};
