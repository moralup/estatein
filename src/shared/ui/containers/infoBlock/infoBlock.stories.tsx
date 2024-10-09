import type { Meta, StoryObj } from '@storybook/react';
import { InfoBlock } from './infoBlock';

const meta = {
    title: 'shared/containers/InfoBlock',
    component: InfoBlock,
    parameters: {
        layout: 'centered',
    },
    args: {
        title: 'Our Achievements',
        description: `Our story is one of continuous growth and evolution. 
        We started as a small team with big dreams, determined to create a
        real estate platform that transcended the ordinary.`,
    },
} satisfies Meta<typeof InfoBlock>;

export default meta;
const SomeElement = (
    <div style={{ color: 'white' }}>
        Some Component.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad, at
        rerum, provident voluptates dignissimos culpa velit architecto esse
        mollitia beatae! Eligendi consequuntur iste quos voluptates asperiores
        odit ipsum itaque!
    </div>
);

type Story = StoryObj<typeof InfoBlock>;

export const Primary: Story = {};

export const WithoutStars: Story = {
    args: {
        isStars: false,
    },
};

export const WithChildren: Story = {
    args: {
        children: SomeElement,
    },
};

export const TextWidth85: Story = {
    args: {
        children: SomeElement,
        textWidth: 85,
    },
};

export const TextWidth80: Story = {
    args: {
        children: SomeElement,
        textWidth: 80,
    },
};
