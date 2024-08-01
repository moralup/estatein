import type { Preview } from '@storybook/react';
import '../../src/app/style/index.scss';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: 'var(--gray-color-08);',
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
