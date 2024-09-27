import type { Meta, StoryObj } from '@storybook/react';
import { PromoProperties } from './promoProperties';

const meta = {
    title: 'DIRECTORY/PromoProperties',
    component: PromoProperties,
    parameters: {
        layout: 'centered',
    },
    args: {

    },
} satisfies Meta<typeof PromoProperties>;

export default meta;

type Story = StoryObj<typeof PromoProperties>;

export const Primary: Story = {

};
