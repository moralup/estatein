import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptionsI } from './types';

export const buildLoaders = ({ isDev, paths }: BuildOptionsI): RuleSetRule[] => {
    const scssLoader: RuleSetRule = {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // prettier-ignore
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    additionalData: `@import "${paths.sass.join('", "')}";`,
                },
            },
        ],
    };

    const svgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader: RuleSetRule = {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: ['file-loader'],
    };

    const tsLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [tsLoader, fileLoader, svgLoader, scssLoader];
};
