import { type Configuration } from 'webpack';
import { BuildOptionsI } from './types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';

export const buildWebpackConfig = (options: BuildOptionsI) => {
    const { isDev, paths, mode } = options;

    const config: Configuration = {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[fullhash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
        devtool: isDev && 'inline-source-map',
    };

    return config;
};
