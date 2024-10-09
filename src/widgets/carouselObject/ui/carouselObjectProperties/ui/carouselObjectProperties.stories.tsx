import type { Meta, StoryObj } from '@storybook/react';
import { CarouselObjectProperties } from './carouselObjectProperties';
import { styleDecorator } from 'shared/config/storybook';

const meta = {
    title: 'widgets/CarouselObject/Properties',
    component: CarouselObjectProperties,
    decorators: styleDecorator({ paddingTop: 70 }),
} satisfies Meta<typeof CarouselObjectProperties>;

export default meta;

type Story = StoryObj<typeof CarouselObjectProperties>;

export const Primary: Story = {};
