import type { Meta, StoryObj } from '@storybook/react';
import { CarouselObjectFAQ } from './carouselObjectFAQ';
import { styleDecorator } from 'shared/config/storybook';

const meta = {
    title: 'widgets/CarouselObject/FAQ',
    component: CarouselObjectFAQ,
    decorators: styleDecorator({ paddingTop: 70 }),
} satisfies Meta<typeof CarouselObjectFAQ>;

export default meta;

type Story = StoryObj<typeof CarouselObjectFAQ>;

export const Primary: Story = {};
