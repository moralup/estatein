import type { Meta, StoryObj } from '@storybook/react';
import { CarouselObjectTemplate } from './carouselObjectTemplate';

const meta = {
    title: 'widgets/CarouselObject/Template',
    component: CarouselObjectTemplate,
    args: {},
} satisfies Meta<typeof CarouselObjectTemplate>;

export default meta;

type Story = StoryObj<typeof CarouselObjectTemplate>;

export const Primary: Story = {};
