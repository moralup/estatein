import type { Meta, StoryObj } from '@storybook/react';
import { containerDecorator } from 'shared/config/storybook';
import { Card } from './card';
import cls from './storybookStyle.module.scss';

const CardContent = () => (
    <>
        <h3>Some Title About Nothing</h3>
        <p>
            Some description about nothing, and a couple more words to add
            volume
        </p>
    </>
);

const meta = {
    title: 'shared/containers/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: <CardContent />,
        className: cls.card,
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Prime: Story = {
    args: {
        className: undefined,
    },
};

export const BackgroundGray10: Story = {
    args: {
        background: 'gray-10',
    },
};

export const AlignLeft: Story = {
    args: {
        align: 'left',
    },
};

export const AlignRight: Story = {
    args: {
        align: 'right',
    },
};

export const AlignCenter: Story = {
    args: {
        align: 'center',
    },
};

export const DirectionColumn: Story = {
    args: {
        direction: 'column',
    },
};

export const DirectionRow: Story = {
    args: {
        direction: 'row',
    },
    decorators: containerDecorator(1000),
};

export const JustifyBetween: Story = {
    args: {
        direction: 'row',
        justify: 'between',
    },
    decorators: containerDecorator(1000),
};
export const JustifyCenter: Story = {
    args: {
        direction: 'row',
        justify: 'center',
    },
    decorators: containerDecorator(1000),
};
export const JustifyLeft: Story = {
    args: {
        direction: 'row',
        justify: 'left',
    },
    decorators: containerDecorator(1000),

};

export const JustifyRight: Story = {
    args: {
        direction: 'row',
        justify: 'right',
    },
    decorators: containerDecorator(1000),

};

export const ThemeAngleGradient: Story = {
    args: {
        theme: 'angleGradient',
    },
};

export const ThemeOutline: Story = {
    args: {
        theme: 'outline',
    },
};
