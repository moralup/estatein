import type { Decorator } from '@storybook/react/*';
import type { CSSProperties } from 'react';

type StyleDecoratorType = (style: CSSProperties) => Decorator;
export const styleDecorator: StyleDecoratorType = style => Story => (
    <div style={style}>
        <Story />
    </div>
);
