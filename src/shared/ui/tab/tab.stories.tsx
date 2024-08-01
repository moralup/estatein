import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './tab';
import RoundCameraIcon from 'shared/assets/icons/round-camera-icon.svg';

const styles = {
    title: {
        fontSize: '40px',
        fontWeight: 'var(--font-weight-bold)',
    },
    desc: {
        fontWeight: 'var(--font-weight-medium)',
    },
};

const ChildrenPrimary = () => (
    <>
        <RoundCameraIcon />
        <span style={{ textWrap: 'nowrap' }}>Find your dream home</span>
    </>
);

const ChildrenMini = () => (
    <>
        <h3 style={styles.title}>200+</h3>
        <p style={styles.desc}> Happy Customers</p>
    </>
);

const meta = {
    title: 'DIRECTORY/Tab',
    component: Tab,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof Tab>;

export const JustifyCenter: Story = {
    args: {
        children: <ChildrenPrimary />,
        justify: 'center',
    },
};
export const JustifyLeft: Story = {
    args: {
        children: <ChildrenPrimary />,
        justify: 'left',
    },
};
export const JustifyRight: Story = {
    args: {
        children: <ChildrenPrimary />,
        justify: 'right',
    },
};

export const Mini: Story = {
    args: {
        children: <ChildrenMini />,
        mini: true,
    },
};
