import type { Meta, StoryObj } from '@storybook/react';
import { CTA } from './CTA';

const meta = {
    title: 'widgets/CTA',
    component: CTA,
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
