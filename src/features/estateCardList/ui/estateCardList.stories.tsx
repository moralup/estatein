import type { Meta, StoryObj } from '@storybook/react';
import { EstateCardList } from './estateCardList';

const meta = {
    title: 'features/EstateCardList',
    component: EstateCardList,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof EstateCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Prime: Story = {};
