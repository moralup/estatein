import type { StorybookConfig } from '@storybook/react-webpack5';
import { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
    webpackFinal: async config => {
        config!.resolve = {
            extensions: ['.tsx', '.ts', '.js'],
            modules: ['../../src', 'node_modules'],
            preferAbsolute: true,
            alias: {},
        };

        config.module!.rules = config.module!.rules!.map(rule => {
            if (/svg/.test((rule as RuleSetRule).test as string)) {
                return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
            }
            return rule;
        });

        config.module!.rules!.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module!.rules!.push({
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        // localIdentName:
                        //     '[path][name]__[local]--[hash:base64:5]',
                    },
                },
                'sass-loader',
            ],
        });

        return config;
    },
};
export default config;
