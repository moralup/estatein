import type { Meta, StoryObj } from '@storybook/react';
import { CarouselObjectTestimonials } from './carouselObjectTestimonials';
import { styleDecorator } from 'shared/config/storybook';

const meta = {
    title: 'widgets/CarouselObject/Testimonials',
    component: CarouselObjectTestimonials,
    decorators: styleDecorator({ paddingTop: 70 }),
} satisfies Meta<typeof CarouselObjectTestimonials>;

export default meta;

type Story = StoryObj<typeof CarouselObjectTestimonials>;

export const Primary: Story = {};
