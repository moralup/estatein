import { Decorator } from '@storybook/react/*';
import { CSSProperties } from 'react';

export const styleDecorator = (style: CSSProperties): Decorator => Story => (
    <div style={style}>
        <Story />
    </div>
);
