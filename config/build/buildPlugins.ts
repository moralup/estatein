import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptionsI } from './types';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

type PluginsType = Configuration['plugins'];

export const buildPlugins = (options: BuildOptionsI): PluginsType => {
    const { isDev, isProd, paths } = options;

    const plugins: PluginsType = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ];

    // plugins.push(new BundleAnalyzerPlugin());

    if (isDev) {
        plugins.push(new ProgressPlugin());
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        );
    }

    return plugins;
};
