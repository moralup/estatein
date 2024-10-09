import type { Meta, StoryObj } from '@storybook/react';
import { CarouselObjectValuedClients } from './carouselObjectValuedClients';
import { styleDecorator } from 'shared/config/storybook';

const meta = {
    title: 'widgets/CarouselObject/ValuedClients',
    component: CarouselObjectValuedClients,
    decorators: styleDecorator({ paddingTop: 70 }),
} satisfies Meta<typeof CarouselObjectValuedClients>;

export default meta;

type Story = StoryObj<typeof CarouselObjectValuedClients>;

export const Primary: Story = {};
